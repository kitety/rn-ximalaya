import {IHomeState} from '@/models/home';
import {RootState} from '@/models/type';
import {RootStackNavigation} from '@/navigator/index';
import {useNavigation} from '@react-navigation/native';
import {DvaLoadingState} from 'dva-loading-ts';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const {num} = useSelector<RootState, IHomeState>(state => state.home);
  const loadingObj = useSelector<RootState, DvaLoadingState>(
    state => state.loading,
  );
  const loading = loadingObj.effects['home/asyncAdd'];
  console.log('loading: ', loading);
  const navigation = useNavigation<RootStackNavigation>();
  const dispatch = useDispatch();

  //  跳转到详情页
  const toDetail = () => {
    navigation.navigate('Detail', {
      id: 1,
    });
  };
  const handleAdd = () => {
    dispatch({
      type: 'home/asyncAdd',
      payload: 25,
    });
  };

  return (
    <View>
      <Text onPress={handleAdd}>
        Home--{num}=={loading}
      </Text>
      <Button title="跳转到详情页" onPress={toDetail} />
    </View>
  );
};

export default Home;
