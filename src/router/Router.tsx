import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {BackHandler, SafeAreaView, View} from 'react-native';

import Home from '../page/Home';
import Test from '../page/Test';
import {showToastMessage} from '../util/Util';

let count = 0; //  종료카운트
const Stack = createStackNavigator();

export default function Router() {
  const forFade = ({current}: any) => {
    return {
      cardStyle: {opacity: current.progress},
    };
  };

  const withScrollView = (WrappedComponent: any) => {
    return (props: any) => {
      const isFocus = useIsFocused();
      const navigation = useNavigation();

      const onBackPress = async () => {
        if (count < 1) {
          count++;
          //ToastAndroid.show('한번더 뒤로가기를 누르면 앱이 종료됩니다.', ToastAndroid.SHORT);
          showToastMessage('뒤로가기를 한번 더 누르면 앱이 종료됩니다.', 1500);
        } else {
          BackHandler.exitApp();
        }
        setTimeout(() => {
          count = 0;
        }, 1500);

        return true;
      };
      useEffect(() => {
        if (!navigation?.canGoBack() && isFocus) {
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
        }

        return () => {
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
      }, [isFocus]);

      return (
        <>
          <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
          <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <WrappedComponent {...props} />
            </View>
          </SafeAreaView>
          <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
        </>
      );
    };
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {RouterSetting.map((item, index) => (
          <Stack.Screen
            name={item.name}
            component={withScrollView(item.component)}
            key={item.name + index}
            options={{
              headerShown: false,
              cardStyleInterpolator: forFade,
              gestureDirection: 'horizontal',
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const RouterSetting = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Test',
    component: Test,
  },
];
