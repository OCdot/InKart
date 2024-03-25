import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import colors from '../../components/common/colors';





const style =StyleSheet.create({
  container: {
    // height: height,
    // flex: 1,
    backgroundColor: colors.white_lvl_3,
  },
  main: {
    flex: 1,
  },
  categoryImg: {
    height: hp('13%'),
    width: wp('13%'),
    resizeMode: 'contain',
  },
  flatlistContainer: {
    backgroundColor: colors.secondaryGreen,
    padding: 10,
    width: responsiveWidth(20),
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex : 1,
  },
  categotyTouch: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black_lvl_3,
  },
  rowStyle: {
    flexDirection: 'row',
    flex : 1,
  },
  // imgContainer : {
  //   padding : 10,
  //   paddingRight :10
  // },
  backgroundImg: {
    height:  responsiveHeight(20),
    width: responsiveWidth(80),
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 30,
    
  },
  catHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2.5),
    color: colors.white,
  },
  catDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  proHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  proDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveFontSize(1.8),
    color: colors.black,
  },
  proStyle : {
    padding :10,
    // alignItems : 'center',
    justifyContent : 'center'
  },
  proImg : {
    resizeMode : 'contain',
    height : responsiveHeight(15),
    width : responsiveWidth(15)
  },
  proCondainer : {
    // borderWidth :1,
    padding : 5,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf  :'center'
  },
  imgBg : {
    backgroundColor : colors.secondaryGreen,
    padding : 10,
    borderRadius : 15
  },
});

export default style;

