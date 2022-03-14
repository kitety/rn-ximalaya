import Detail from '@/pages/detail';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import BottomTabs from './bottomTabs';

export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  // const route = useRoute<RootRouteType>();
  // console.log('route: ', route);
  // const navigation = useNavigation<RootStackNavigation>();
  // console.log('navigation: ', navigation);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // 公用一个标题栏
          headerMode: 'float',
          // 标题居中
          headerTitleAlign: 'center',
          // 下面两句是统一ios和安卓的页面切换效果
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          // 卡片滑动
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // 启用手势
          gestureEnabled: true,
          // 手势滑动方向 水平
          gestureDirection: 'horizontal',
          headerStatusBarHeight: StatusBar.currentHeight,
          // 标题栏样式
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: '详情页',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
