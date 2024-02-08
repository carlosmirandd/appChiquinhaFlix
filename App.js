import Header from './Header';
import Login from './Login';
import Screen0 from './Screen0';
import Screen1 from './Screen1';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TransitionSpecs } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MaterialTab = createMaterialBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MyComponent = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 149,
        },
      }}
      useLegacyImplementation>
      <Drawer.Screen name="Filme" options={{
          headerShown: false,
        }} component={Screen1} />
      <Drawer.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Drawer.Screen name="Logado" component={Screen0} />
      
    </Drawer.Navigator>
  </NavigationContainer>
);

export default MyComponent;
