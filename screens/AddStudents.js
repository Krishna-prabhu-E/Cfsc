// /screens/AddStudents.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddStudents = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add Students</Text>
      {/* Add your content here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});

export default AddStudents;
