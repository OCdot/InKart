import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const style = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white_lvl_3,
    },
    head: {
      fontFamily: 'Poppins-Black',
      fontSize: 30,
      color: colors.black,
      textAlign: 'center',
      // lineHeight :0,
      // padding : 10,
      marginTop: 15,
    },
    imgView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 1,
    },
    bigImgView: {
      justifyContent: 'center',
      alignItems: 'center',
      // marginVertical :1,
      backgroundColor: 'rgba(0,0,0,0.51)',
      flex: 1,
    },
    bigImg: {
      height: wp('60%'),
      width: wp('60%'),
      resizeMode: 'contain',
      // borderRadius: wp('60%') * 0.5,
    },
    img: {
      height: wp('30%'),
      width: wp('30%'),
      // resizeMode: 'contain',
      borderRadius: wp('30%') * 0.5,
    },
    editTouch: {
      position: 'absolute',
      right: orientation ? wp('35%') : hp('45%'),
      bottom: 0,
      // borderWidth :1
    },
    edit: {
      height: wp('10%'),
      width: wp('10%'),
      resizeMode: 'contain',
    },
    field: {
      padding: 10,
    },
    close: {
      position: 'relative',
      right: orientation ? wp('-20%') : hp('-15%'),
      bottom: 10,
      // borderWidth :1
    },
    selectBox : {
      flexDirection : 'row',
      padding : 10,
      // justifyContent : 'center',
      // alignItems : 'center'
    },
    touch : {
      padding : 10,
      borderRadius : 15,
      backgroundColor : colors.primaryGreen,
      marginHorizontal : 10,
      // justifyContent : 'center',
      // alignItems : 'center'
    },
    touchTxt : {
      fontFamily : 'Poppins-Regular',
      fontSize : 14,
      color : colors.white
    },

  });

export default style;
