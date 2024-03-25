import {Image, Share, Text, TouchableOpacity, View} from 'react-native';
import UseOrientation from '../common/orientation';
import style from './style';
import colors from '../common/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import { useSelector } from 'react-redux';

const CommonHeaderRight = props => {
  const cartCount = useSelector(state => state.cartCount)
  const navigation = useNavigation();
  const route = useRoute()
  // console.warn(route);
  // const {product} = route.params
  // console.warn(product);
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const handeleClick = async(type) => {
    if (type === 'cart') {
      navigation.navigate('Cart');
    }else if(type === 'share'){
      // console.warn(product);
      // const message = `Check out this amazing product: ${product.name}. Description: ${product.description}.`;
      // const result = await Share.share({
      //   message: message
          
         
      // });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }

    }
  };
  return (
    <View style={{flexDirection: 'row' ,height : 70,marginBottom: 23,}}>
      <>
      {props.plus ? (
          <TouchableOpacity
            style={responsiveStyle.container}
            onPress={props.handlePlusIcon}>
            <Feather
              style={responsiveStyle.plus}
              name="plus-square"
              size={30}
              color={colors.black}
            />
          </TouchableOpacity>
        ) : null}

        {props.share ? (
          <TouchableOpacity
            style={responsiveStyle.container}
            onPress={()=>handeleClick('share')}>
            <EvilIcons
              style={responsiveStyle.share}
              name="share-google"
              size={40}
              color={colors.black}
            />
          </TouchableOpacity>
        ) : null}

        {props.cart ? (
          <TouchableOpacity
            style={responsiveStyle.container}
            onPress={()=>handeleClick('cart')}>
            <View>
              <View style={responsiveStyle.cartCountView}>
                <Text style={responsiveStyle.cartCount}>{cartCount}</Text>
              </View>
            </View>
            <Image
              style={responsiveStyle.back}
              source={require('../../assets/images/shopping-cart.png')}
            />
          </TouchableOpacity>
        ) : null}
      </>
    </View>
  );
};
export default CommonHeaderRight;
