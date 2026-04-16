import React, { useEffect, useRef } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const loginOpacity = useRef(new Animated.Value(0)).current;

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
      ]).start();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#330099" />
      <View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: splashOpacity }]}>
          <SplashScreen />
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: loginOpacity }]}>
          <LoginScreen />
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
