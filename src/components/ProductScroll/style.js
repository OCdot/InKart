import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../common/colors';

const style = StyleSheet.create({
  mainContainer: {
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor : colors.white,
    padding : 20,
    borderRadius : 20,
    // paddingBottom :20
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  t1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  t2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
  t3: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    marginTop: 15,
  },
  FlatListMainContainer : {
    // padding : 10
  },
  FlatListContainer: {
    borderWidth: 1,
    borderColor: colors.primaryGreen,
    padding: 20,
    borderRadius: 15,
    marginRight : 20,
  },
  heart: {
    height: hp('2%'),
    width: wp('5%'),
    resizeMode : 'contain',
    alignSelf : 'flex-end',
    marginRight : -13,
    // marginTop : -10
  },
  FlatListImg : {
    height : hp('20%'),
    width : wp('20%'),
    resizeMode : 'contain',
    alignSelf : 'center'
  },
  name : {
    fontFamily : 'Poppins-Bold',
    fontSize : 15,
    color : colors.black,
  },
  detail : {
    fontFamily : 'Poppins-Regular',
    fontSize : 15,
    color : colors.black
  },
  price : {
    fontFamily : 'Poppins-Regular',
    fontSize : 15,
    color : colors.black,
    fontWeight : 'bold'
  },
  footerContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  plus : {
    fontFamily : 'Poppins-Regular',
    fontSize : 15,
    color : colors.black,
    fontWeight : 'bold',
    color : colors.white_lvl_2
  },
  plusView : {
    backgroundColor : colors.primaryGreen,
    borderRadius : 5,
    width : wp('5%'),
    alignItems : 'center'
  }


});

export default style;
