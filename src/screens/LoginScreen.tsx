import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NormalButton from '../component/NormalButton';
import { signInWithFacebook, signInWithGoogle } from '../services/AuthService';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      onLogin();
    } catch (e: any) {
      Alert.alert('Login fejl', e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFacebook = async () => {
    try {
      setLoading(true);
      await signInWithFacebook();
      onLogin();
    } catch (e: any) {
      Alert.alert('Login fejl', e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHENTIA</Text>

      <Text style={styles.otherLabel}>Other Login Options:</Text>
      <View style={styles.socialRow}>
        <NormalButton
          text={'Google'}
          onPress={handleGoogle}
          height={44}
          width={120}
          backgroundColor={'#D9D9D9'}
          textColor={'#333333'}
          borderRadius={6}
          fontSize={14}
          fontWeight={'bold'}
        />
        <NormalButton
          text={'Facebook'}
          onPress={handleFacebook}
          height={44}
          width={120}
          backgroundColor={'#D9D9D9'}
          textColor={'#333333'}
          borderRadius={6}
          fontSize={14}
          fontWeight={'bold'}
        />
      </View>

      {loading && <Text style={styles.loadingText}>Logger ind...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330099',
    paddingHorizontal: 32,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
    marginBottom: 60,
  },
  otherLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 24,
    fontSize: 14,
  },
});

export default LoginScreen;
