import React from 'react';
import Users from '../screens/Users';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
    padding: '50px',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Users" component={Users} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
