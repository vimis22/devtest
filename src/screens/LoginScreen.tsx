import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NormalButton from '../component/NormalButton.tsx';
import NormalInputField from '../component/NormalInputField.tsx';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHENTIA</Text>

      <Text style={styles.label}>Name:</Text>
      <NormalInputField
        text={name}
        placeholder={''}
        onChangeText={setName}
        backgroundColor={'#D9D9D9'}
        borderRadius={8}
      />

      <Text style={styles.label}>Password:</Text>
      <NormalInputField
        text={password}
        placeholder={''}
        onChangeText={setPassword}
        secureTextEntry={true}
        backgroundColor={'#D9D9D9'}
        borderRadius={8}
      />

      <Text style={styles.otherLabel}>Other Login Options:</Text>
      <View style={styles.socialRow}>
        <NormalButton
          text={'Google'}
          onPress={() => {}}
          height={36}
          width={88}
          backgroundColor={'#D9D9D9'}
          textColor={'#333333'}
          borderRadius={6}
          fontSize={13}
          fontWeight={'bold'}
        />
        <NormalButton
          text={'Facebook'}
          onPress={() => {}}
          height={36}
          width={100}
          backgroundColor={'#D9D9D9'}
          textColor={'#333333'}
          borderRadius={6}
          fontSize={13}
          fontWeight={'bold'}
        />
        <NormalButton
          text={'Normal'}
          onPress={() => {}}
          height={36}
          width={88}
          backgroundColor={'#D9D9D9'}
          textColor={'#333333'}
          borderRadius={6}
          fontSize={13}
          fontWeight={'bold'}
        />
      </View>

      <View style={styles.loginRow}>
        <NormalButton
          text={'Login'}
          onPress={onLogin}
          height={48}
          width={200}
          backgroundColor={'#4A8C7A'}
          textColor={'#FFFFFF'}
          borderRadius={8}
          fontSize={18}
          fontWeight={'bold'}
        />
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
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 14,
    marginBottom: 4,
  },
  otherLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    marginBottom: 8,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginRow: {
    alignItems: 'center',
    marginTop: 28,
  },
});

export default LoginScreen;
