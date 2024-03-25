import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../common/colors';

const style = StyleSheet.create({

  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  t1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color : colors.black_lvl_3
  },
  t2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color : colors.grey,
  },
  t3: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    marginTop: 15,
    color : colors.grey,
  },
});

export default style;
