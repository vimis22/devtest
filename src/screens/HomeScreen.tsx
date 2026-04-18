import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomBar from '../component/BottomBar';
import CardButton from '../component/CardButton';
import NormalPopup from '../component/NormalPopup';
import TopBar from '../component/TopBar';
import {
  ChatRoom,
  createChatRoom,
  subscribeToChatRooms,
} from '../services/FirestoreService';

interface HomeScreenProps {
  onOpenChat: (chatRoom: ChatRoom) => void;
}

const HomeScreen = ({ onOpenChat }: HomeScreenProps) => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToChatRooms(updatedRooms => {
      setRooms(updatedRooms);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleCreate = async (name: string, description: string) => {
    await createChatRoom(name, description);
    setShowCreate(false);
  }

  return (
    <View style={styles.screen}>
      <TopBar title={'HomeScreen'} backgroundColor={'#330099'} fontColor={'#FFFFFF'} showAddButton onAddPress={() => setShowCreate(true)} />

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent}>
        <View style={styles.feedRow}>
          <Text style={styles.feedText}>Click to Update the Latest Feed</Text>
          {loading && <ActivityIndicator size={"small"} color={"#330099"} />}
        </View>
        {rooms.map(room => (
          <CardButton key={room.id} title={room.name} description={room.description} onPress={() => onOpenChat(room)} />
        ))}
      </ScrollView>

      <BottomBar />

      {showCreate && (
        <NormalPopup onCreate={handleCreate} onClose={() => setShowCreate(false)} />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  list: { flex: 1 },
  listContent: { paddingBottom: 16 },
  feedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  feedText: { fontSize: 14, color: '#333333' },
});

export default HomeScreen;