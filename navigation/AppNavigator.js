import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AddStudents from '../screens/AddStudents';
import VerifyStudents from '../screens/VerifyStudents';
import MapTrackStudents from '../screens/MapTrackStudents';
import SignOut from '../screens/SignOut';
import Login from '../screens/Login'; // Import Login screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define each screen in the navigator */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddStudents" component={AddStudents} />
        <Stack.Screen name="VerifyStudents" component={VerifyStudents} />
        <Stack.Screen name="MapTrackStudents" component={MapTrackStudents} />
        <Stack.Screen name="SignOut" component={SignOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
