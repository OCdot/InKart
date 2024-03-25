import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flex: 1,
    backgroundColor: colors.primaryGreen,
    height: hp('9%'),
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginTop: 2,
    fontFamily: 'Poppins-Bold',
    color: colors.white_lvl_2,
  },
  footerIcon: {
    height: hp('3%'),
    width: wp('6%'),
    resizeMode: 'contain',
  },
  dot: {
    fontSize: 40,
    color: colors.white_lvl_2,
    textAlign: 'center',
    marginTop: -40,
  },

  cart : {
    flexDirection : 'column',
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
    // marginTop: 3,
    alignItems: 'center',
    position : 'absolute',
    right : 0,
    top : -60,
    marginRight: -20,
    zIndex : 3,
    height : 20,
    width : 20,
    // justifyContent : 'center',
    
    
  },
  iconView : {
    marginTop: -14,
    
  },
  icon: {
    height: hp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
    marginRight: 12,
    // borderWidth : 1,
    // marginTop: -18,
  },

});

export default style;
