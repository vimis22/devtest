import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CardButtonProps {
  title: string;
  backgroundColor: string;
  fontSize: number;
  subtitle: string;
  circleHeight: number;
  circleWidth: number;
  circleBackgroundColor: string;
  icon: any;
}

const CardButton = (props: CardButtonProps) => {
  return (
    <TouchableOpacity style={{ backgroundColor: props.backgroundColor }}>
      <View style={{
          height: props.circleHeight,
          width: props.circleWidth,
          backgroundColor: props.circleBackgroundColor,
        }}
      ></View>
      <View>
        <Text style={{ fontSize: props.fontSize }}>{props.title}</Text>
        <Text style={{ fontSize: props.fontSize }}>{props.subtitle}</Text>
      </View>
      <View>
        {props.icon}
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;