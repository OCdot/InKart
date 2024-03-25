import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../common/colors';

const style = orientation => StyleSheet.create({
  share : {
    marginTop :20,
    // height : hp('30%'),
    // width : wp('10%'),
  },
  plus : {
    marginTop :25,
      // alignItems : 'center',
      // justifyContent : 'center'
      // borderWidth: 1
  },
  back : {
    height : hp('10%'),
    width : wp('10%'),
    resizeMode : 'contain'
  },
  container : {
    // marginLeft : 13,
    padding : 3,
    // borderWidth : 1,
  },
  cartCount : {
    color : colors.white,
    // top : 0,
    // right : 0,
   marginTop: -3,
},
cartCountView : {
  backgroundColor : 'red',
  padding : 3,
  borderRadius: 25/2,
  // marginBottom: 3,
  alignItems: 'center',
  position : 'absolute',
  right : 0,
  top : 20,
  marginRight: -20,
  zIndex : 3,
  height : 20,
  width : 20,
  // justifyContent : 'center',
  marginRight : 0
}
});

export default style;
