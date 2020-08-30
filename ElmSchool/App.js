// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import FPlanScreen from './screens/FPlanScreen';
import FMarketScreen from './screens/FMarketScreen';
import SavingsScreen from './screens/SavingsScreen';



function LogoTitle() {
  return (
    <Image
      style={{ resizeMode:'contain' }}
      source={require('./assests/logo.png')}
    />
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
        backgroundColor: '#2F363F',
        
        },
        headerTintColor:'#fff',
        
        headerTitleStyle: {
        fontWeight: 'bold',
        color:'white'
        },
        headerTitle: props => <LogoTitle {...props} />
        
    }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="FPlan" component={FPlanScreen}/>
        <Stack.Screen name="FMarket" component={FMarketScreen}/>
        <Stack.Screen name="Savings" component={SavingsScreen}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;