import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NotificationPopupProps {
  onYes?: () => void;
  onNo?: () => void;
}

const NotificationPopup = (props: NotificationPopupProps) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.bellCircle}>
          <Text style={styles.bellIcon}>🔔</Text>
        </View>
        <Text style={styles.question}>
          Do you want to receive Notifications from this Room?
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.yesButton} onPress={props.onYes}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton} onPress={props.onNo}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 20,
    paddingTop: 24,
    width: '85%',
    alignItems: 'center',
  },
  bellCircle: {
    position: 'absolute',
    top: -18,
    right: -18,
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#330099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    fontSize: 20,
  },
  question: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  yesButton: {
    backgroundColor: '#3A7A3A',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
  noButton: {
    backgroundColor: '#C0392B',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationPopup;
