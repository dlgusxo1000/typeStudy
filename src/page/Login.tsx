import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Container, RowView} from '../util/Comtainer';
import {getSize} from '../util/getSize';
import {BlackText, TextInputWhite} from '../util/TextStyles';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text style={styles.title}>TITLE</Text>
      <RowView>
        <BlackText text="ID" />
        <TextInputWhite width={getSize(600)} height={50} />
      </RowView>
      <RowView>
        <BlackText text="PW" />
        <TextInputWhite width={getSize(600)} height={50} />
      </RowView>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Login;
