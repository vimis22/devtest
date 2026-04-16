import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface NormalButtonProps {
  text: string;
  onPress: () => void;
  height: number;
  width: number;
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  fontSize: number;
  fontWeight: string;
}

const NormalButton = (props: NormalButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={props.onPress}>
      <Text style={{ color: props.textColor, fontSize: props.fontSize, fontWeight: props.fontWeight as any }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default NormalButton;
