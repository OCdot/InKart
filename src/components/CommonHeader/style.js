import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    backgroundColor: colors.white_lvl_1,
    paddingHorizontal: 5,
    // borderWidth: 1,
    height: wp('18%')
  },
  logo: {
    width: wp('20%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
  sideicon: {
    width: wp('12%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
});

export default style;
