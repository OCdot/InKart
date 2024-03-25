import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';
const style = orientation =>
  StyleSheet.create({
    mainContainer: {
      // flex : 1,
    },
    textInput: {
      fontFamily: 'Poppins-Regular',
      borderRadius: 10,
      fontSize: 16,
      borderWidth: 1,
      width: wp('70%'),
      height: hp('5%'),
      // padding : 10,
      alignSelf: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
      // zIndex : 1,
      borderColor : colors.primaryGreen,
      backgroundColor : colors.secondaryGreen,
    },
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color : colors.black
    },
    mapView : {
      height : orientation ? hp('30%') : wp('45%'),
      justifyContent :'flex-end',
      alignItems : 'center',
      width : orientation? wp('100%') : hp('100%')
    },
    touchView : {
      paddingHorizontal : 20,
      flexDirection : 'row',
      alignItems : 'center',
      paddingTop : 4,

    },
    touchTxt : {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color : colors.black
    },
    iconView :{
      backgroundColor : colors.primaryGreen,
      borderRadius : 10,
      marginRight :10,
      padding : 10
    }
  });
export default style;
