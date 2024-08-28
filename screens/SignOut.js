import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignOut = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Immediately navigate to the Login screen when this component is rendered
    navigation.navigate('Login');
  }, [navigation]);

  return <SafeAreaView />; // Render nothing
};

export default SignOut;
