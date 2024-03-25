import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';

const style = (orientation, filter) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: filter ? 'row' : null,
      // borderWidth: 1,
    },
    // filterContainer :{

    // },
    search: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.primaryGreen,
      backgroundColor: colors.secondaryGreen,
      paddingLeft: filter ? 15 :10,
      paddingRight: 10,
      borderRadius: 10,
      // padding: 1,
      justifyContent: 'space-evenly',
      width: orientation ? (filter ? wp('80%') : wp('90%')) : hp('90%'),
      alignItems: 'center',
      marginVertical: 18,
      marginLeft: filter ? 5 : null,
    },
    icon: {
      width: wp('5%'),
      height: hp('5%'),
      resizeMode: 'contain',
    },
    innerContainer: {
      flexDirection: 'row',
    },
    textInput: {
      fontFamily: 'Poppins-Regular',
      marginLeft: 15,
      color: colors.primaryGreen,
      // borderWidth : 1,
      width: orientation ? wp('70%') : hp('80%'),
      overflow: 'scroll',
    },
    filterTxt: {
      fontFamily: 'Poppins-Regular',
      color: colors.primaryGreen,
      fontSize: 15,
    },
    filterTxtView: {
      padding: 10,
    },
  });

export default style;
