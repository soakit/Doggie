// The StackNavigator function name is deprecated, please use createStackNavigator instead
import {
	SafeAreaView,
	createStackNavigator,
  	createBottomTabNavigator,
} from 'react-navigation'
// https://github.com/oblador/react-native-vector-icons#installation
// ionicons.com选图标
import Ionicons from 'react-native-vector-icons/Ionicons';

import ListScreen from '../views/list'
import MakeScreen from '../views/make'
import MoreScreen from '../views/more'


import React from 'react';
import { ScrollView, StatusBar, Button, Text } from 'react-native';

const MyNavScreen = ({navigation, banner}) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <Text>{banner}</Text>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="Open profile screen"
      />
      <Button
        onPress={() => navigation.navigate('NotifSettings')}
        title="Open notifications screen"
      />
      <Button
        onPress={() => navigation.navigate('SettingsTab')}
        title="Go to settings tab"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>

    <StatusBar barStyle="default" />
  </ScrollView>
);

const MyHomeScreen = ({navigation}) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({navigation}) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({navigation}) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({navigation}) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const MainTab = createStackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile!`,
    }),
  },
});

const SettingsTab = createStackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});

const StacksInTabs = createBottomTabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default StacksInTabs;