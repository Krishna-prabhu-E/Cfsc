import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useNavigation();
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const runAnimation = () => {
      scrollAnim.setValue(0);
      Animated.timing(scrollAnim, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(() => runAnimation());
    };

    runAnimation();
  }, [scrollAnim]);

  const translateX = scrollAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [width, -width * 2], // Adjust to move the text fully across the screen
  });

  const handleSignOut = () => {
    navigation.navigate('SignOut'); // Navigate to SignOut screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>Crime Free Student Community</Text>
        <Image 
          source={require('../assets/tn.png')}
          style={styles.logo}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#BDC3C7"
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('AddStudents')}
          >
            <Image
              source={require('../assets/user.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Add Students</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('VerifyStudents')}
          >
            <Image
              source={require('../assets/id.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Verify Students</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={() => navigation.navigate('MapTrackStudents')}
          >
            <Image
              source={require('../assets/map.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Map</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconContainer} 
            onPress={handleSignOut}
          >
            <Image
              source={require('../assets/out.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer - Disclaimer */}
      <View style={styles.footer}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <Text style={styles.footerText}>
            "Together we protect, serve, and build a safer community. Crime Free Student Community. Join hands to make the society safer."
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Light gray background
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#2C3E50', // Dark gray/navy background
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
  },
  logo: {
    width: 40,
    height: 40,
  },
  navTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ECF0F1', // Light gray text
    flex: 1,
    textAlign: 'center',
    paddingLeft: 2,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#ECF0F1', // Light gray background
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#2C3E50', // Dark gray text
    fontSize: 16,
    elevation: 5,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  iconContainer: {
    width: width * 0.36,
    margin: 15,
    aspectRatio: 1,
    backgroundColor: '#34495E', // Dark gray background
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  iconImage: {
    width: '50%',
    height: '50%',
    marginBottom: 1,
    resizeMode: 'contain',
  },
  iconText: {
    color: '#ECF0F1', // Light gray text
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 7,
  },
  footer: {
    padding: 20,
    backgroundColor: '#2C3E50', // Dark gray background
  },
  footerText: {
    fontSize: 16,
    color: '#ECF0F1', // Light gray text
    textAlign: 'center',
    width: width * 3, // Ensure the text width exceeds the screen width
  },
});

export default Home;
