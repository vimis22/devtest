import React from 'react';
import { Animated, Text, View } from 'react-native';
import CardButton from '../component/CardButton.tsx';
import ScrollView = Animated.ScrollView;

const cards = [
  {
    title: 'Room Chat 1',
    description: 'This Chat is for Room 1',
    icon: 'Chat',
  },
  {
    title: 'Room Chat 2',
    description: 'This Chat is for Room 2',
    icon: 'Chat',
  },
  {
    title: 'Room Chat 3',
    description: 'This Chat is for Room 3',
    icon: 'Chat',
  }
];
const HomeScreen = () => {
    return (
      <ScrollView>
        {cards.map((card, index) => (
          <CardButton key={index} title={card.title} backgroundColor={'rgb(255 255 255 / 0,16)'} fontSize={16} description={card.description} circleHeight={50} circleWidth={50} circleBackgroundColor={'#ffffff'} icon={card.icon} />
        ))}
      </ScrollView>
    );
}

export default HomeScreen;