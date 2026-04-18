import React, { useEffect, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from './firebase/firebaseConfig';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import { ChatRoom } from './services/FirestoreService';

type Screen = 'splash' | 'login' | 'home' | 'chat';

export default function App() {
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const loginOpacity = useRef(new Animated.Value(0)).current;
  const homeOpacity = useRef(new Animated.Value(0)).current;
  const chatOpacity = useRef(new Animated.Value(0)).current;
  const [activeScreen, setActiveScreen] = useState<Screen>('splash');
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);

  const fadeTo = (from: Animated.Value, to: Animated.Value, next: Screen) => {
    Animated.sequence([
      Animated.timing(from, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(to, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => setActiveScreen(next));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const unsubscribe = auth().onAuthStateChanged(user => {
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start(() => {
          if (user) {
            Animated.timing(homeOpacity, {
              toValue: 1,
              duration: 400,
              useNativeDriver: true,
            }).start(() => setActiveScreen('home'));
          } else {
            Animated.timing(loginOpacity, {toValue: 1, duration: 400, useNativeDriver: true})
              .start(() => setActiveScreen('login'));
          }
        });
        unsubscribe();
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => fadeTo(loginOpacity, homeOpacity, 'home');

  const handleOpenChat = (room: ChatRoom) => {
    setSelectedRoom(room);
    fadeTo(homeOpacity, chatOpacity, 'chat');
  };

  const handleBackToHome = () => fadeTo(chatOpacity, homeOpacity, 'home');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#330099" />
      <View style={styles.container}>
        <Animated.View
          style={[StyleSheet.absoluteFill, { opacity: splashOpacity }]}
          pointerEvents={activeScreen === 'splash' ? 'auto' : 'none'}
        >
          <SplashScreen />
        </Animated.View>

        <Animated.View
          style={[StyleSheet.absoluteFill, { opacity: loginOpacity }]}
          pointerEvents={activeScreen === 'login' ? 'auto' : 'none'}
        >
          <LoginScreen onLogin={handleLogin} />
        </Animated.View>

        <Animated.View
          style={[StyleSheet.absoluteFill, { opacity: homeOpacity }]}
          pointerEvents={activeScreen === 'home' ? 'auto' : 'none'}
        >
          <HomeScreen onOpenChat={handleOpenChat} />
        </Animated.View>

        <Animated.View
          style={[StyleSheet.absoluteFill, { opacity: chatOpacity }]}
          pointerEvents={activeScreen === 'chat' ? 'auto' : 'none'}
        >
          {selectedRoom && (
            <ChatScreen room={selectedRoom} onBack={handleBackToHome} />
          )}
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
