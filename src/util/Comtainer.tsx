import {useNavigation} from '@react-navigation/native';
import React, {Component, ReactChild} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = ({children}: any) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
export const RowView = ({children}: any) => {
  return <View style={styles.rowView}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  rowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
