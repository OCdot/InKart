import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';

const style = orientation =>
  StyleSheet.create({
    product: {
      height: orientation ? hp('30%') : hp('30%'),
      width: orientation ? hp('50%') : hp('70%'),
      resizeMode: 'contain',
      marginTop: 10,
      marginVertical: 10,
    },
    heart: {
      position: 'absolute',
      right: 10,
      marginTop: 10,
      // borderWidth : 1,
      zIndex : 1
    },
    contentContainer: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: wp('5%'),
      elevation: 5,
      shadowColor: colors.category_4,
      paddingBottom: 50,
    },
    contentHead: {
      fontFamily: 'Poppins-Black',
      fontSize: 20,
      color: colors.black,
    },
    contentPrice: {
      fontFamily: 'Poppins-Regular',
      fontSize: 20,
      color: colors.black,
    },
    detailHead: {
      color: colors.primaryGreen,
      fontFamily: 'Poppins-Regular',
      fontSize: 20,
    },
    rattingContainer: {
      flexDirection: 'row',
      // justifyContent : 'center',
      alignItems: 'center',
      // marginRight : 0,
      // borderWidth : 1
    },
    ratting: {
      fontFamily: 'Poppins-regular',
      color: colors.black,
      fontSize: 16,
    },
    offTxt: {
      fontFamily: 'Poppins-Regular',
      color: colors.primaryGreen,
      marginLeft: 10,
      fontSize: 16,
    },
    contentDetail: {
      fontFamily: 'Poppins-Regular',
      color: colors.black,
      fontSize: 16,
    },

    proBottomContainer: {
      borderBottomWidth: 1,
      borderBottomColor: colors.grey,
      paddingBottom: 10,
    },

    // FIXED BUTTON

    fixedButton: {
      position: 'absolute',
      backgroundColor: colors.primaryGreen,
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      bottom: 10,
      padding: 15,
      alignItems : 'center',
      width : wp('95%')
    },
    innerButton: {
      backgroundColor: colors.white,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center',
      alignItems : 'center',
      // width : wp('25%')
    },
    btnTxt: {
      fontFamily: 'Poppins-Bold',
      color: colors.white,
      fontSize: 16,
      // zIndex : 1
      
    },
    qty: {
      fontFamily: 'Poppins-Bold',
      color: colors.primaryGreen,
      fontSize: 16,
      marginHorizontal : 10,
    },

  });
export default style;
