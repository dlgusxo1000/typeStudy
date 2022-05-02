import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{backgroundColor: 'red', height: 50}}
        onPress={() => {
          console.log('asd');
          navigation.navigate('Test');
        }}>
        <Text> Home </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
