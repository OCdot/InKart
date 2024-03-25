import {Image, TouchableOpacity} from 'react-native';
import UseOrientation from '../common/orientation';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const CommonHeaderLeft = props => {
  const navigation = useNavigation();
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const handeleClick = () =>{
     if (props.type ==='back') {
      if(props.action){
        props.action()
      }else{
        navigation.goBack()
      }
      
      
     } else {
      navigation.toggleDrawer()
     }
  }
  return (
    <TouchableOpacity
      style={responsiveStyle.container}
      onPress={handeleClick}>
      <Image
        style={responsiveStyle.back}
        source={
          props.type === 'back'
            ? require('../../assets/images/back_arrow.png')
            : require('../../assets/images/app-drawer.png')
        }
      />
    </TouchableOpacity>
  );
};
export default CommonHeaderLeft;
