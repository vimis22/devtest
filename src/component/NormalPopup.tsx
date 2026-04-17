import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface NormalPopupProps {
  onCreate?: (chatName: string, description: string) => void;
  onClose?: () => void;
}

const NormalPopup = (props: NormalPopupProps) => {
  const [chatName, setChatName] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Please write your Create Chat Information here.
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Chat Name:</Text>
          <TextInput
            style={styles.input}
            value={chatName}
            onChangeText={setChatName}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => props.onCreate?.(chatName, description)}
        >
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    width: '85%',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#222222',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    width: 100,
    fontSize: 14,
    color: '#333333',
  },
  input: {
    flex: 1,
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  createButton: {
    backgroundColor: '#3A7A3A',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NormalPopup;