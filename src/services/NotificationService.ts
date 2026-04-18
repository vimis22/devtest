import { getApp } from '@react-native-firebase/app';
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  onMessage,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from '@react-native-firebase/firestore';

const messagingInstance = getMessaging(getApp());
const db = getFirestore(getApp());

export const requestNotificationsPermission = async (): Promise<boolean> => {
  const status = await requestPermission(messagingInstance);
  return (
    status === AuthorizationStatus.AUTHORIZED ||
    status === AuthorizationStatus.PROVISIONAL
  );
};

export const subscribeToRoomNotifications = async (
  userId: string,
  roomId: string,
): Promise<void> => {
  const token = await getToken(messagingInstance);
  await setDoc(
    doc(db, 'userTokens', userId),
    { token, subscribedRooms: arrayUnion(roomId) },
    { merge: true },
  );
};

export const unsubscribeFromRoomNotifications = async (
  userId: string,
  roomId: string,
): Promise<void> => {
  await updateDoc(doc(db, 'userTokens', userId), {
    subscribedRooms: arrayRemove(roomId),
  });
};

export const listenToForegroundMessages = (
  callback: (title: string, body: string) => void,
) => {
  return onMessage(messagingInstance, async remoteMessage => {
    const title = remoteMessage.notification?.title ?? '';
    const body = remoteMessage.notification?.body ?? '';
    callback(title, body);
  });
};
