import {Image, View} from 'react-native';
import style from './style';

const Splash = () => {
  return (
    <View style = {style.container}>
      <Image style ={style.image}
        source={require('../../assets/images/logo-removebg-preview.png')}
      />
    </View>
  );
};
export default Splash;
