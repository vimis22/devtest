import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

interface NormalInputFieldProps {
  text: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  fontSize?: number;
  fontWeight?: any;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
}

const NormalInputField = (props: NormalInputFieldProps) => {
  return (
    <TextInput
      value={props.text}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry ?? false}
      style={[
        styles.input,
        {
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
          borderRadius: props.borderRadius,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    paddingHorizontal: 12,
    width: '100%',
  },
});

export default NormalInputField;
