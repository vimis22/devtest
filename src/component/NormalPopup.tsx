import React from 'react';
import NormalText from './NormalText.tsx';
import { Text, TouchableOpacity, View } from 'react-native';

interface NormalPopupProps {
  text: string;
  height: any;
  width: any;
  backgroundColor: any;
  fontColor: any;
  fontSize: any;
  fontWeight: any;
  borderRadius: any;
  buttonText: any;
  buttonOnPress: any;
  buttonBackgroundColor: any;
  buttonTextColor: any;
  buttonFontSize: any;
  buttonFontWeight: any;
  buttonBorderRadius: any;
  buttonHeight: any;
  buttonWidth: any;
}

const NormalPopup = (props: NormalPopupProps) => {
  return (
    <View>
      <Text>{props.text}</Text>
      <TouchableOpacity>
        <NormalText text={props.buttonText} fontColor={props.buttonTextColor} fontSize={props.buttonFontSize} fontBackgroundColor={props.buttonBackgroundColor} fontWeight={props.buttonFontWeight} />
      </TouchableOpacity>
      <TouchableOpacity>
        <NormalText text={props.buttonText} fontColor={props.buttonTextColor} fontSize={props.buttonFontSize} fontBackgroundColor={props.buttonBackgroundColor} fontWeight={props.buttonFontWeight} />
      </TouchableOpacity>
    </View>
  )
}

export default NormalPopup;