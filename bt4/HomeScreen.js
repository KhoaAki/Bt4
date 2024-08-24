import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>TRANG CHỦ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  box: {
    backgroundColor: '#4CAF50', 
    padding: 20,
    borderRadius: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, 
  },
  text: {
    fontSize: 28,
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2, 
  },
});

export default HomeScreen;