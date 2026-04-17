import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MessageProps {
  sender: string;
  message: string;
  isOwn?: boolean;
}

const Message = (props: MessageProps) => {
  if (props.isOwn) {
    return (
      <View style={styles.ownContainer}>
        <View style={styles.bubble}>
          <Text style={styles.messageText}>{props.message}</Text>
        </View>
        <View style={styles.avatar} />
      </View>
    );
  }
  return (
    <View style={styles.otherContainer}>
      <View style={styles.avatar} />
      <View style={styles.bubble}>
        <Text style={styles.messageText}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ownContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 6,
  },
  otherContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 6,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#330099',
    marginHorizontal: 8,
  },
  bubble: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 10,
    maxWidth: '70%',
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});

export default Message;