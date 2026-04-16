import React from 'react';
import { Text, View } from 'react-native';

interface TopBarProps {
  title: string;
  height: any;
  width: any;
  backgroundColor: any;
  fontColor: any;
}

const TopBar = (props: TopBarProps) => {
  return (
    <View style={{ height: props.height, width: props.width, backgroundColor: props.backgroundColor }}>
      <Text style={{ color: props.fontColor }}>{props.title}</Text>
    </View>
  )
}