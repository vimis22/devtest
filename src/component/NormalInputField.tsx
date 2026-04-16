import React from 'react';
import { TextInput, View } from 'react-native';

interface NormalInputFieldProps {
  text: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  fontSize: number;
  fontWeight: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
}

const NormalInputField = (props: NormalInputFieldProps) => {
  return (
    <View>
      <TextInput value={props.text} placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry}
        style={{
          fontSize: props.fontSize,
          fontWeight: props.fontWeight as any,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
          borderRadius: props.borderRadius,
        }}
      />
    </View>
  );
};

export default NormalInputField;
