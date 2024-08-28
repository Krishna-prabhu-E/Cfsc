// /components/IconButton.js
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

const IconButton = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495E',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    margin: 10,
  },
  icon: {
    width: '50%',
    height: '50%',
    marginBottom: 5,
  },
  label: {
    color: '#ECF0F1',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default IconButton;
