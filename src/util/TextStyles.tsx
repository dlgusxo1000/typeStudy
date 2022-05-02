import {useNavigation} from '@react-navigation/native';
import React, {Component, ReactChild} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface size {
  width: number;
  height: number;
}

export const BlackText = ({text}: any) => {
  return <Text style={styles.blackTextStyle}>{text}</Text>;
};
export const TextInputWhite = ({width, height}: size) => {
  return (
    <TextInput
      style={[{width: width, height: height}, styles.textInputWhite]}
    />
  );
};

const styles = StyleSheet.create({
  blackTextStyle: {
    color: '#000',
  },
  textInputWhite: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
  },
});
