import {RootStackParamList} from '@/navigator/index';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

export type RootRouteType = RouteProp<RootStackParamList, 'Detail'>;

const Detail = () => {
  const route = useRoute<RootRouteType>();
  return (
    <Text>
      <Text>{route.params?.id}</Text>
    </Text>
  );
};

export default Detail;
