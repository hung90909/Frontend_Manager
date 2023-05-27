import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import  HomeScreen  from './src/screens/HomeScreen';
import  AddScreen from './src/screens/AddScreen';
import  EditScreen  from './src/screens/EditScreen';
import  Detail from './src/screens/DetailScreen';
import  CartScreen  from './src/screens/CartScreen';
import  ProfileScreen from './src/screens/ProfileScreen';
import  MoreScreen  from './src/screens/MoreScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabScreen() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#00B761',
      inactiveTintColor: 'black',
    }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen
        name="status"
        component={MoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more-horiz" size={size} color={color} />
          ),
          tabBarLabel: 'status',
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
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
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
       
      
  );
}

export default App;