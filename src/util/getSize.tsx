import {Dimensions} from 'react-native';
import {useAppSelector} from '../store/hooks';
import size from '../store/size';

export function getSize(input: number) {
  const deviceWidth = Dimensions.get('screen').width;
  const {sizeReducer} = useAppSelector(state => state);

  return (sizeReducer.size.width / deviceWidth) * input;
}
