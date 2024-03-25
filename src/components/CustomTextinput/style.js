import {Dimensions, StyleSheet} from 'react-native';
import colors from '../common/colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  textInput: {
    color: colors.black_lvl_3,
    fontSize: 14,
    fontFamily: 'Poppins_Regular',
    flex : 1,
    // height : hp('5%'),
    // borderWidth : 1,
    // width : wp('70%'),

   
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondaryGreen,
    padding: width * 0.01,
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  icon: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  check :{
    color : colors.primaryGreen,
    fontFamily : 'Poppins-Bold',
    marginRight : 10
  },
});

export default style;
