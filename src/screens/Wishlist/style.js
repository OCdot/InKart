import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const style = orientation =>
  StyleSheet.create({
    emptyContainer :{
      padding : 15,
      justifyContent: 'center',
      alignItems  : 'center',
    },
    emptyTxt : {
      fontFamily : 'Poppins-Regular',
      fontSize: 25,
      color: colors.danger,
    },
    homeBtn : {
      padding:5
    },
    homeBtnTxt : {
      fontFamily : 'Poppins-Regular',
      fontSize : 20,
      color : colors.primaryGreen
    },
    container: {
      flex: 1,
      backgroundColor: colors.white_lvl_3,
      padding: 15,
    },
    back : {
      height : hp('10%'),
      width : wp('10%'),
      resizeMode : 'contain'
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
      // top : 2,
      marginRight: 10,
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
    productView: {
      padding: 15,
      backgroundColor: colors.white,
      flexDirection: 'row',
      borderRadius: 15,
      alignItems: 'center',
      // alignSelf : 'center',
      // overflow: 'hidden',
      // borderWidth : 1,
      marginVertical: 5,
    },
    productImg: {
      height: hp('15%'),
      width: wp('30%'),
      resizeMode: 'contain',
    },
    secondView: {
      borderLeftColor: colors.grey,
      borderLeftWidth: 1,
      paddingLeft: 10,
      marginLeft: 10,
      overflow :  'hidden',
      // width : wp('65%'),
      // borderWidth : 1
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: colors.black,
    },
    price: {
      fontFamily: 'Poppins-Bold',
      fontSize: 14,
      color: colors.black,
    },
    desc: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: colors.black_lvl_1,
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      alignItems: 'center',
    },
    offView: {
      borderRadius: 15,
      backgroundColor: colors.primaryGreen,
      marginHorizontal: 5,
      padding: 5,
    },
    offTxt: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: colors.white,
    },
    cartView: {
      borderRadius: 15,
      borderColor: colors.primaryGreen,
      borderWidth: 1,
      padding: 5,
      marginHorizontal: 5,
    },
    cartTxt: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: colors.primaryGreen,
    },
    delete : {
      resizeMode : 'contain',
      height : hp('5%'),
      width : wp('5%'),

    },
    deleteView : {
      // backgroundColor : colors.danger,
      borderRadius : 5,
      padding : 3,
      top: -15,
      right : -4,
      position : 'absolute',
    },
  });

export default style;
