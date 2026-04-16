import React from 'react';
import { StyleSheet, View } from 'react-native';
import NormalInputField from '../component/NormalInputField.tsx';
import NormalText from '../component/NormalText.tsx';
import NormalButton from '../component/NormalButton.tsx';

const LoginScreen = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <NormalText
        text={'CHENTIA'}
        fontColor={'#FFFFFFFF'}
        fontSize={16}
        fontBackgroundColor={'#00000000'}
        fontWeight={'normal'}
      />

      <NormalText
        text={'Name:'}
        fontColor={'#FFFFFFFF'}
        fontSize={16}
        fontBackgroundColor={'#00000000'}
        fontWeight={'normal'}
      />
      <NormalInputField
        text={name}
        placeholder={''}
        onChangeText={setName}
        secureTextEntry={false}
        fontSize={16}
        fontWeight={'normal'}
        backgroundColor={'#D9D9D9'}
        borderColor={'transparent'}
        borderWidth={0}
        borderRadius={8}
      />

      <NormalText
        text={'Password:'}
        fontColor={'#FFFFFFFF'}
        fontSize={16}
        fontBackgroundColor={'#00000000'}
        fontWeight={'normal'}
      />
      <NormalInputField
        text={password}
        placeholder={''}
        onChangeText={setPassword}
        secureTextEntry={true}
        fontSize={16}
        fontWeight={'normal'}
        backgroundColor={'#D9D9D9'}
        borderColor={'transparent'}
        borderWidth={0}
        borderRadius={8}
      />

      <NormalText
        text={'Other Login Options:'}
        fontColor={'#FFFFFFFF'}
        fontSize={16}
        fontBackgroundColor={'#00000000'}
        fontWeight={'bold'}
      />
      <View style={styles.row}>
        <NormalButton text={'Google'}    onPress={() => {}} height={44} width={90}  backgroundColor={'#D9D9D9'} textColor={'#333333'} borderRadius={8} fontSize={14} fontWeight={'bold'} />
        <NormalButton text={'Microsoft'} onPress={() => {}} height={44} width={100} backgroundColor={'#D9D9D9'} textColor={'#333333'} borderRadius={8} fontSize={14} fontWeight={'bold'} />
        <NormalButton text={'Normal'}    onPress={() => {}} height={44} width={90}  backgroundColor={'#D9D9D9'} textColor={'#333333'} borderRadius={8} fontSize={14} fontWeight={'bold'} />
      </View>

      <View style={styles.loginRow}>
        <NormalButton text={'Login'} onPress={() => {}} height={50} width={220} backgroundColor={'#4A8C7A'} textColor={'#FFFFFF'} borderRadius={8} fontSize={18} fontWeight={'bold'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330099',
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  loginRow: {
    alignItems: 'center',
    marginTop: 24,
  },
});

export default LoginScreen;
