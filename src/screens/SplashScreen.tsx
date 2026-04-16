import React from 'react';
import NormalText from '../component/NormalText.tsx';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <NormalText text={'CHENTIA'} fontColor={'#FFFFFF'} fontSize={48} fontBackgroundColor={'none'} fontWeight={'bold'} />
      <ActivityIndicator size={"large"} color={"#FFFFFF"} style={{marginTop: 32}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
})
export default SplashScreen;
