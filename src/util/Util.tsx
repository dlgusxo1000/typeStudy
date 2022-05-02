import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

interface showPushToastMessage {
  remoteMessage: {
    notification: {
      title: string;
      body: string;
    };
  };
  onPress: Function;
  props: Object;
  onShow: Function;
}

export const showToastMessage = (text: string, time = 3000) => {
  Toast.show({
    type: 'customToast',
    position: 'bottom',
    text1: text,
    visibilityTime: time,
    onPress: async () => {
      await Toast.hide();
    },
    autoHide: true,
  });
};

export const showPushToastMessage = ({
  remoteMessage,
  onPress,
  props,
  onShow,
  ...rest
}: showPushToastMessage) => {
  Toast.show({
    type: 'pushToast',
    position: 'top',
    text1: remoteMessage.notification.title,
    text2: remoteMessage.notification.body,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 0,
    onShow: async () => {
      await onShow();
    },
    onHide: () => {},
    onPress: async () => {
      await Toast.hide();
      onPress();
    },
  });
};
