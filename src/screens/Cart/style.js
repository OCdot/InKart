import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const style = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white_lvl_3,
      padding: 20,
    },
    FlatListContainer: {
      // borderWidth: 1,
      // borderColor: colors.primaryGreen,
      backgroundColor: colors.white_lvl_1,
      padding: 20,
      borderRadius: 15,
      // marginRight : 20,
      marginBottom: 15,
    },
    FlatListImgContainer: {
      flexDirection: 'row',
    },
    emptyContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    emptyTxt: {
      fontFamily : 'Poppins-MediumItalic',
      fontSize : 20,
      color : colors.danger
    },

    content: {
      marginLeft: 25,
      borderLeftWidth: 1,
      paddingLeft: 20,
    },
    FlatListImg: {
      height: hp('15%'),
      width: wp('15%'),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    name: {
      fontFamily: 'Poppins-Bold',
      fontSize: 15,
      color: colors.black,
    },
    detail: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: colors.black,
    },
    price: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: colors.danger,
      fontWeight: 'bold',
      // marginRight : 10
    },
    priceView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // borderWidth :1,
      width: orientation ? wp('70%') : hp('80%'),
    },
    offView: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 1,
      paddingLeft: 5,
      height: hp('3%'),
    },
    offTxt: {
      fontFamily: 'Poppins-Bold',
      fontSize: 15,
      color: colors.primaryGreen,
      // marginTop : 10
    },
    qunView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      borderRadius: 10,
      alignItems: 'center',
      padding: 5,
      // marginLeft: 19,
      marginTop: -10,
      // height : hp('4.5%')
    },
    txt1: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: colors.black,
      fontWeight: 'bold',

      padding: 5,
    },
    txt2: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,

      fontWeight: 'bold',
      color: colors.primaryGreen,
      padding: 5,
    },

    renderView: {
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'center',
    },
    offView: {
      marginRight: -25 / 2,
      zIndex: 1,
      flexDirection: 'column',
    },

    circle: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_lvl_3,
      // borderWidth: 1,
    },
    rectangle1: {
      width: responsiveWidth(60),
      backgroundColor: colors.secondaryGreen,
      height: 100,
    },
    rectangle2: {
      width: responsiveWidth(20),
      backgroundColor: colors.secondaryGreen,
      height: 100,
      padding: 10,
      justifyContent: 'center',
    },
    innerCircle1: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_lvl_3,
      marginTop: -25 / 2,
    },
    innerCircle2: {
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      backgroundColor: colors.white_lvl_3,
      marginBottom: -25 / 2,
    },
  });

export default style;
