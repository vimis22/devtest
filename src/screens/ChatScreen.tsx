import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import BottomBar from '../component/BottomBar';
import Message from '../component/Message';
import NotificationPopup from '../component/NotificationPopup';
import SendBar from '../component/SendBar';
import TopBar from '../component/TopBar';
import { auth } from '../firebase/firebaseConfig';
import {
  ChatRoom,
  Message as IMessage,
  sendMessage,
  subscribeToMessages,
} from '../services/FirestoreService';
import {
  requestNotificationsPermission,
  subscribeToRoomNotifications,
  unsubscribeFromRoomNotifications,
} from '../services/NotificationService';

interface ChatScreenProps {
  room: ChatRoom;
  onBack: () => void;
}

const ChatScreen = ({ room, onBack }: ChatScreenProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [showNotifPopup, setShowNotifPopup] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const user = auth().currentUser;

  useEffect(() => {
    const unsubscribe = subscribeToMessages(room.id, updated => {
      setMessages(updated);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    });
    // Spørg første gang om notifikationer
    setShowNotifPopup(true);
    return () => unsubscribe();
  }, [room.id]);

  const handleSend = async (text: string) => {
    if (!user) return;
    try {
      await sendMessage(room.id, user.uid, user.displayName ?? 'User', text);
    } catch {
      Alert.alert('Error','Message could not be sent');
    }
  };

  const handleNotifYes = async () => {
    const granted = await requestNotificationsPermission();
    if (granted && user) {
      await subscribeToRoomNotifications(user.uid, room.id);
    } else if (!granted) {
      Alert.alert(
        'Tilladelse nægtet',
        'Du skal give tilladelse til notifikationer i telefonens indstillinger.',
      );
    }
    setShowNotifPopup(false);
  };

  const handleNotifNo = async () => {
    if (user) await unsubscribeFromRoomNotifications(user.uid, room.id);
    setShowNotifPopup(false);
  };

  return (
    <View style={styles.screen}>
      <TopBar title={room.name} subtitle={`Last Update: ${new Date().toLocaleDateString('da-DK')}`}
              backgroundColor={'#330099'} fontColor={'#FFFFFF'} showBackButton onBackPress={onBack} />
      <ScrollView ref={scrollRef} style={styles.messages} contentContainerStyle={styles.messagesContent}>
        {messages.map(msg => (
          <Message key={msg.id} sender={msg.senderName} message={msg.text} isOwn={msg.senderId === user?.uid} />
        ))}
      </ScrollView>
      <SendBar onSend={handleSend} />
      <BottomBar />

      {showNotifPopup && (
        <NotificationPopup onYes={handleNotifYes} onNo={handleNotifNo} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  messages: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 8,
  },
});

export default ChatScreen;
