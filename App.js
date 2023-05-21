import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from './src/screens/HomeScreen';
import  AddScreen from './src/screens/AddScreen';
import  EditScreen  from './src/screens/EditScreen';
import  Detail from './src/screens/DetailScreen';
import  CartScreen  from './src/screens/CartScreen';
import  ProfileScreen from './src/screens/ProfileScreen';
import  MoreScreen  from './src/screens/MoreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Main" component={MainTabScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
       
      
  );
}

export default App;
