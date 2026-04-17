import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface NormalButtonProps {
  text: string;
  onPress: () => void;
  height: number;
  width: number;
  backgroundColor: string;
  textColor: string;
  borderRadius: number;
  fontSize: number;
  fontWeight?: 'normal' | 'bold';
}

const NormalButton = (props: NormalButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { height: props.height, width: props.width, backgroundColor: props.backgroundColor, borderRadius: props.borderRadius, }]}
      onPress={props.onPress}>
      <Text style={{ color: props.textColor, fontSize: props.fontSize, fontWeight: props.fontWeight ?? 'normal'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NormalButton;
