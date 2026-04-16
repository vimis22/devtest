import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface NotificationPopupProps {
  title: string;
  message: string;
  circleHeight: number;
  circleWidth: number;
  circleBackgroundColor: string;
}

const NotificationPopup = (props: NotificationPopupProps) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: props.circleHeight,
          width: props.circleWidth,
          backgroundColor: props.circleBackgroundColor,
        }}
      ></View>
      <View>
        <Text>{props.title}</Text>
        <Text>{props.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationPopup;
