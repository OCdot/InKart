import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  mainContainer: {
    // marginVertical: 50,
    padding: 15,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 1,
    // borderWidth : 1,
    padding: 10,
    borderBottomWidth : 1,
    paddingBottom : 20,
    marginTop : 10
  },
  avatar: {
    height: 75,
    width: 75,
    backgroundColor: colors.white_lvl_3,
    justifyContent: 'center',
    borderRadius: 75 / 2,
    alignItems: 'center',
  },
  img: {
    height: wp('20%'),
    width: wp('20%'),
    resizeMode: 'cover',
    borderRadius: wp('30%') * 0.5,
  },
  details: {
    paddingLeft: 15,
  },
  user: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color : colors.black
  },
  userInfo: {
    fontFamily: 'Poppins-Regular',
    marginTop: -10,
    color : colors.black
  },
  drawerContainer: {
    padding: 20,
  },

  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    // backgroundColor : colors.primaryGreen,
  },
  icon: {
    height: hp('3%'),
    width: wp('6%'),
    resizeMode: 'contain',
    marginRight: 5,
    marginBottom: 6,
  },
  listText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    padding: 5,
    alignSelf: 'center',
    color : colors.black,
    // paddingTop: 15,
  },
  logout: {
    backgroundColor: colors.primaryGreen,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'auto',
  },
  logoutText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.white_lvl_2,
    marginLeft: 9,

    // padding : 5,
  },
  supportContainer : {
    padding: 15,
    backgroundColor : colors.secondaryGreen,
    overflow : 'hidden',
    marginHorizontal :1,
    marginTop : 25,
    borderRadius : 15
  },
  supportHead : {
    fontFamily : 'Poppins-Bold',
    fontSize : 20,
    color : colors.black,


  },
  supportTxt : {
    fontFamily : 'Poppins-Regular',
    fontSize : 15,
    color : colors.black,
    
  },
});

export default style;
