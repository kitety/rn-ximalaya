import Home from '@/pages/home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 80,
        },
        tabBarIndicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        tabBarActiveTintColor: '#f86442',
        tabBarInactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Home0"
        component={Home}
        options={{tabBarLabel: '推荐'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
