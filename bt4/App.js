import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
          cardStyle: styles.card,
        }}
      >
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{
            title: 'Sign In',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Home',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50', 
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    backgroundColor: '#f5f5f5', 
  },
});

export default App;