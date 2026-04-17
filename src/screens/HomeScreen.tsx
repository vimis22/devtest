import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomBar from '../component/BottomBar.tsx';
import CardButton from '../component/CardButton.tsx';
import TopBar from '../component/TopBar.tsx';

const cards = [
  { title: 'Room Chat 1', description: 'Description' },
  { title: 'Room Chat 2', description: 'Description' },
  { title: 'Room Chat 3', description: 'Description' },
  { title: 'Room Chat 4', description: 'Description' },
];

interface HomeScreenProps {
  onOpenChat?: () => void;
  onAddChat?: () => void;
}

const HomeScreen = ({ onOpenChat, onAddChat }: HomeScreenProps) => {
  return (
    <View style={styles.screen}>
      <TopBar
        title={'HomeScreen'}
        backgroundColor={'#330099'}
        fontColor={'#FFFFFF'}
        showAddButton
        onAddPress={onAddChat}
      />
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
      >
        <View style={styles.feedRow}>
          <Text style={styles.feedText}>Click to Update the Latest Feed:</Text>
          <TouchableOpacity>
            <ActivityIndicator size="small" color="#330099" />
          </TouchableOpacity>
        </View>
        {cards.map((card, index) => (
          <CardButton
            key={index}
            title={card.title}
            description={card.description}
            onPress={onOpenChat}
          />
        ))}
      </ScrollView>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  feedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  feedText: {
    fontSize: 14,
    color: '#333333',
  },
});

export default HomeScreen;
