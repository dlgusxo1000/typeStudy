import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import Router from './src/router/Router';
import Toast from 'react-native-toast-message';
import {store} from './src/store/store';

interface Props {
  customToast: {
    text1: string;
  };
}

const App = ({}: Props) => {
  return (
    <Provider store={store}>
      <Router />
      <Toast config={toastConfig} />
    </Provider>
  );
  ``;
};

const toastConfig = {
  customToast: ({text1, onPress, props}) => (
    <View
      onStartShouldSetResponder={onPress}
      style={{
        width: '92%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 0 : 0,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'rgba(22,22,22,0.60)',
          height: 60,
          justifyContent: 'center',
          borderRadius: 17,
        }}>
        <Text>{text1}</Text>
      </View>
    </View>
  ),
  pushToast: ({text1, text2, onPress, props, ...rest}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        width: '100%',
        justifyContent: 'center',
        padding: 16,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        backgroundColor: '#22222290',
      }}>
      <View
        style={{
          width: '100%',
        }}>
        <Text
          numberOfLines={1}
          style={[
            {
              color: '#fff',
              textAlign: 'center',
            },
          ]}>
          {text1}
        </Text>
        <Text
          numberOfLines={2}
          style={[
            {
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
            },
          ]}>
          {text2}
        </Text>
      </View>
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
