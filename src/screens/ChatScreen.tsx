import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BottomBar from '../component/BottomBar.tsx';
import Message from '../component/Message.tsx';
import SendBar from '../component/SendBar.tsx';
import TopBar from '../component/TopBar.tsx';

interface ChatScreenProps {
  onBack?: () => void;
}

const ChatScreen = ({ onBack }: ChatScreenProps) => {
  return (
    <View style={styles.screen}>
      <TopBar
        title={'Chat 1'}
        subtitle={'Last Update: xxxxx'}
        backgroundColor={'#330099'}
        fontColor={'#FFFFFF'}
        showBackButton
        showAvatar
        onBackPress={onBack}
      />
      <ScrollView
        style={styles.messages}
        contentContainerStyle={styles.messagesContent}
      >
        <Message sender={'User'} message={'Hello there!'} isOwn={false} />
        <Message sender={'Me'} message={'Hi! How are you?'} isOwn={true} />
        <Message
          sender={'User'}
          message={'I am doing well, thanks!'}
          isOwn={false}
        />
        <Message sender={'Me'} message={'Great to hear!'} isOwn={true} />
      </ScrollView>
      <SendBar onSend={() => {}} />
      <BottomBar />
    </View>
  );
};

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
