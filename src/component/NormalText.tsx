import React from 'react';
import { View, Text } from 'react-native';

interface NormalTextProps {
  text: string;
  fontColor: any;
  fontSize: any;
  fontBackgroundColor: any;
  fontWeight: 'normal' |'bold';
  fontStyle: 'normal' | 'italic';
}

const NormalText = (props: NormalTextProps) => {
  return (
    <View>
      <Text style={{ color: props.fontColor, fontSize: props.fontSize, backgroundColor: props.fontBackgroundColor, fontWeight: props.fontWeight, fontStyle: props.fontStyle }}>
        {props.text}
      </Text>
    </View>
  )
}

export default NormalText;