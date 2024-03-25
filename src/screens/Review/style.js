import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';

const style = orientationv =>
  StyleSheet.create({
    container: {
      padding: 10,
    },
    reviewInnerContainer: {
      backgroundColor: colors.grey,
      borderRadius: 10,
      marginVertical: 10,
      padding: 10,
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 10,
    },
    userName: {
      fontFamily: 'Poppins-Bold',
      color: colors.black,
      fontSize: 16,
      marginLeft: 10,
    },
    userImg: {
      height: wp('10%'),
      width: wp('10%'),
      resizeMode: 'contain',
      overflow: 'hidden',
    },
    reviewTxt: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
    actionSheetContainer: {
      padding: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    actionSheetHead: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: colors.black,
    },
  });
export default style;
