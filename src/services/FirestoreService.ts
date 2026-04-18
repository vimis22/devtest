import { getApp } from '@react-native-firebase/app';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  writeBatch,
} from '@react-native-firebase/firestore';

const db = getFirestore(getApp());

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  text: string;
  createdAt: number;
  imageUrl?: string;
}

export const subscribeToChatRooms = (onUpdate: (rooms: ChatRoom[]) => void) => {
  const q = query(
    collection(db, 'chatRooms'),
    orderBy('lastMessageAt', 'desc'),
  );
  return onSnapshot(q, snapshot => {
    const rooms: ChatRoom[] = snapshot.docs.map(d => ({
      id: d.id,
      name: d.data().name,
      description: d.data().description,
      lastMessageAt: d.data().lastMessageAt,
    }));
    onUpdate(rooms);
  });
};

export const subscribeToMessages = (
  roomId: string,
  onUpdate: (messages: Message[]) => void,
) => {
  const q = query(
    collection(db, 'chatRooms', roomId, 'messages'),
    orderBy('createdAt', 'desc'),
    limit(50),
  );
  return onSnapshot(q, snapshot => {
    const messages: Message[] = snapshot.docs
      .map(d => ({
        id: d.id,
        senderId: d.data().senderId,
        senderName: d.data().senderName,
        senderAvatar: d.data().senderAvatar,
        text: d.data().text,
        createdAt: d.data().createdAt,
        imageUrl: d.data().imageUrl,
      }))
      .reverse();
    onUpdate(messages);
  });
};

export const sendMessage = async (
  roomId: string,
  senderId: string,
  senderName: string,
  text: string,
): Promise<void> => {
  const now = Date.now();
  const batch = writeBatch(db);

  const msgRef = doc(collection(db, 'chatRooms', roomId, 'messages'));
  batch.set(msgRef, { senderId, senderName, text, createdAt: now });

  const roomRef = doc(db, 'chatRooms', roomId);
  batch.update(roomRef, { lastMessageAt: now });

  await batch.commit();
};

export const createChatRoom = async (
  name: string,
  description: string,
): Promise<void> => {
  await addDoc(collection(db, 'chatRooms'), {
    name,
    description,
    lastMessageAt: Date.now(),
  });
};
