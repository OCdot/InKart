import {Image, Text, TouchableOpacity, View} from 'react-native';
import UseOrientation from '../../../components/common/orientation';
import style from './style';
import StarRating from 'react-native-star-rating-widget';
import { useState } from 'react';
import colors from '../../../components/common/colors';
import { useNavigation } from '@react-navigation/native';

const ProductReview = props => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const {product} = props
  const [rating, setRating] = useState(3.5);
  const navigation =useNavigation()

  const handleRedirect = () => {
    navigation.navigate('Review', {product : product})
  };

  return (
    <View style={responsiveStyle.reviewContainer}>
      <View style={responsiveStyle.innerContainer}>
        <Text style={responsiveStyle.listTxt}>Product Review(1)</Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text style={responsiveStyle.seeall}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={responsiveStyle.reviewInnerContainer}>
        <View style={responsiveStyle.userContainer}>
          <Image
            style={responsiveStyle.userImg}
            source={require('../../../assets/images/hacker.png')}
          />
          <View>
            <Text style={responsiveStyle.userName}>OC</Text>
            <StarRating starSize={20} rating={rating} onChange={() => {}} />
          </View>
        </View>
        <Text style={[responsiveStyle.reviewTxt, {color : colors.white}]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </Text>
      </View>
    </View>
  );
};
export default ProductReview;
