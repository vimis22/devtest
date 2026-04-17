import React, { useEffect, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen.tsx';

export default function App() {
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const loginOpacity = useRef(new Animated.Value(0)).current;
  const homeOpacity = useRef(new Animated.Value(0)).current;
  const [activeScreen, setActiveScreen] = useState<'splash' | 'login' | 'home'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.sequence([
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(loginOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => setActiveScreen('login'));
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    Animated.sequence([
      Animated.timing(loginOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(homeOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => setActiveScreen('home'));
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#330099" />
      <View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: splashOpacity }]} pointerEvents={activeScreen === 'splash' ? 'auto' : 'none'}>
          <SplashScreen />
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: loginOpacity }]} pointerEvents={activeScreen === 'login' ? 'auto' : 'none'}>
          <LoginScreen onLogin={handleLogin} />
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: homeOpacity }]} pointerEvents={activeScreen === 'home' ? 'auto' : 'none'}>
          <HomeScreen />
        </Animated.View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330099',
  },
});
