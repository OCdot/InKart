import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = orientation => StyleSheet.create({
  back : {
    height : hp('10%'),
    width : wp('10%'),
    resizeMode : 'contain'
  },
  container : {
    // marginLeft : 13,
    padding : 3
  }
});

export default style;
