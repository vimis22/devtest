import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CardButtonProps {
  title: string;
  description: string;
  onPress?: () => void;
}

const CardButton = (props: CardButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <Text style={styles.playIcon}>{'▶'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 12,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  description: {
    fontSize: 13,
    color: '#666666',
    marginTop: 2,
  },
  playIcon: {
    fontSize: 22,
    color: '#330099',
    marginLeft: 8,
  },
});

export default CardButton;
