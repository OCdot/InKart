import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../../components/common/colors';

const style = orientation =>
  StyleSheet.create({
    listContainerMain: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    listContainer: {
      flexDirection: 'row',
      width: wp('35%'),
      backgroundColor: colors.lightGrey,
      //   alignItems : 'center',
      justifyContent: 'center',
      borderRadius: 10,
      padding: 10,
    },
    listTxt: {
      fontFamily: 'Popins-Regular',
      color: colors.black_lvl_3,
      marginRight: 15,
      fontSize : 16
    },

    // STYLE EXTRA INFO

    extraInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: colors.black,
      fontWeight : '800'
    },
    sectionContainer: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.grey,
    },

    // PRODUCT REVIEW

    reviewContainer : {
      marginVertical : 10
    },
    innerContainer : {
      flexDirection : 'row',
      alignItems : 'center',
       justifyContent : 'space-between'
    }, 
    seeall : {
      fontFamily: 'Popins-Bold',
      color: colors.primaryGreen,
      // marginRight: 15,
      fontSize : 16
    },
    reviewInnerContainer : {
      backgroundColor : colors.grey,
      borderRadius : 10,
      marginVertical : 10,
      padding :10
    },
    userContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      paddingBottom : 10
    },
    userName : {
      fontFamily : 'Poppins-Bold',
      color : colors.black,
      fontSize : 16,
      marginLeft : 10
    },
    userImg : {
      height : wp('10%'),
      width : wp('10%'),
      resizeMode : 'contain',
      overflow : 'hidden'
    },
    reviewTxt : {
      color : colors.black,
      fontFamily : 'Poppins-Regular',
      fontSize : 14
    },

    // DELIVERY INFO
    deliveryhead : {
        color : colors.black,
        fontFamily : 'Poppins-Bold',
        fontSize : 18
    },
    commonTxt : {
      color : colors.black,
      fontFamily : 'Poppins-Regular',
      fontSize : 14,
      // lineHeight : 10
  },

  
  });
export default style;
