import {RootStackNavigation} from '@/navigator/index';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = () => {
  const navigation = useNavigation<RootStackNavigation>();

  //  跳转到详情页
  const toDetail = () => {
    navigation.navigate('Detail', {
      id: 1,
    });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="跳转到详情页" onPress={toDetail} />
    </View>
  );
};

export default Home;
