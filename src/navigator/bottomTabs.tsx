import IconFont from '@/assets/iconfont';
import Account from '@/pages/account';
import Found from '@/pages/found';
import Home from '@/pages/home';
import Listen from '@/pages/listen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationState,
  RouteProp,
  TabNavigationState,
  useNavigation,
} from '@react-navigation/core';
import React from 'react';
import {RootStackNavigation, RootStackParamList} from '.';
import HomeTabs from './homeTabs';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Account: undefined;
  Found: undefined;
};
type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState<RootStackParamList>;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

const TITLE_OBJ = {
  HomeTabs: '首页',
  Listen: '我听',
  Found: '发现',
  Account: '我的',
};
const BottomTabs = () => {
  const navigation = useNavigation<RootStackNavigation>();
  return (
    <Tab.Navigator
      // @ts-ignore
      screenListeners={() => ({
        state: (e: {data: {state: NavigationState<BottomTabParamList>}}) => {
          const {routeNames, index} = e.data.state;
          const text = routeNames[index] as keyof typeof TITLE_OBJ;
          navigation.setOptions({
            headerTitle: TITLE_OBJ[text] || '首页',
          });
        },
      })}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarActiveTintColor: '#f86442',
          tabBarIcon: ({color, size}) => (
            <IconFont name="icon-shouye" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarActiveTintColor: '#f86442',
          tabBarIcon: ({color, size}) => (
            <IconFont name="icon-shoucang" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarActiveTintColor: '#f86442',
          tabBarIcon: ({color, size}) => (
            <IconFont name="icon-faxian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarActiveTintColor: '#f86442',
          tabBarIcon: ({color, size}) => (
            <IconFont name="icon-user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
