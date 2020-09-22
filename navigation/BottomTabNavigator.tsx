import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import GigsScreen from '../screens/GigsScreen';
import GigScreen from '../screens/GigScreen';
import BandsScreen from '../screens/BandsScreen';
import BandScreen from '../screens/BandScreen';
import { BottomTabParamList, HomeParamList, GigsParamList, BandsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen 
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }} />
        <BottomTab.Screen 
        name="Gigs"
        component={GigsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-microphone" color={color} />,
        }} />
        <BottomTab.Screen 
        name="Bands"
        component={BandsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-microphone" color={color} />,
        }} />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={ HomeScreen}
        options={{ headerTitle: 'Latest Gig' }}
      />
    </HomeStack.Navigator>
  );
}

const GigsStack = createStackNavigator<GigsParamList>();

function GigsNavigator() {
  return (
    <GigsStack.Navigator>
      <GigsStack.Screen
        name="GigsScreen"
        component={ GigsScreen}
        options={{ headerTitle: 'All gigs' }}
      />
      <GigsStack.Screen
        name="GigScreen"
        component={ GigScreen }
        options={ GigScreen.navigationOptions }
      />
    </GigsStack.Navigator>
  );
}

const BandsStack = createStackNavigator<BandsParamList>();

function BandsNavigator() {
  return (
    <BandsStack.Navigator>
      <BandsStack.Screen
        name="BandsScreen"
        component={ BandsScreen}
        options={{ headerTitle: 'All bands' }}
      />
      <BandsStack.Screen
        name="BandScreen"
        component={ BandScreen }
        options={ BandScreen.navigationOptions }
      />
    </BandsStack.Navigator>
  );
}
