import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface BottomBarProps {
  onHomePress?: () => void;
  onChatPress?: () => void;
  onSettingsPress?: () => void;
}

const BottomBar = (props: BottomBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onHomePress}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>⌂</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onChatPress}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>💬</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.onSettingsPress}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>⚙</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#330099',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default BottomBar;
