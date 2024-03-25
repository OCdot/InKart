import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../common/colors';

const style = StyleSheet.create({
  mainContainer: {
    padding: 20,

    backgroundColor: colors.category_2,
    borderRadius: 15,
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
  content: {
    marginLeft: 25,
    borderLeftWidth: 1,
    paddingLeft: 20,
  },
  FlatListImg: {
    height: hp('10%'),
    width: wp('10%'),
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
    width: wp('50%'),
  },
  offView: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 10,
    padding: 1,
    paddingLeft: 5,
    height: hp('3%'),
  },
  offTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.white,
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
    marginLeft: 19,
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
  footer: {
    alignItems: 'center',
  },
  footerTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.black,
  },
  btnView: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 15,
    
    
    width: wp('45%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
});

export default style;
