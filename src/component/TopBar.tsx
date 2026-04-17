import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TopBarProps {
  title: string;
  backgroundColor: string;
  fontColor: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showAddButton?: boolean;
  onAddPress?: () => void;
  subtitle?: string;
  showAvatar?: boolean;
}

const TopBar = (props: TopBarProps) => {
  return (
    <View
      style={[styles.container, { backgroundColor: props.backgroundColor }]}
    >
      {props.showBackButton ? (
        <TouchableOpacity onPress={props.onBackPress} style={styles.sideSlot}>
          <Text style={[styles.backArrow, { color: props.fontColor }]}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.sideSlot} />
      )}

      {props.showAvatar && <View style={styles.avatar} />}

      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: props.fontColor }]}>
          {props.title}
        </Text>
        {props.subtitle && (
          <Text style={[styles.subtitle, { color: props.fontColor }]}>
            {props.subtitle}
          </Text>
        )}
      </View>

      {props.showAddButton ? (
        <TouchableOpacity onPress={props.onAddPress} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.sideSlot} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  sideSlot: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#D9D9D9',
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 11,
    opacity: 0.85,
  },
  addButton: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#330099',
    lineHeight: 28,
  },
});

export default TopBar;