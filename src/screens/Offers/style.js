import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    // height: height,
    // flex: 1,
    backgroundColor: colors.white_lvl_3,
  },
  main: {
    flex: 1,
  },
  renderView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  offView: {marginRight: -25 / 2, zIndex: 1},
  
  circle: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    backgroundColor: colors.white_lvl_3,
  },
  rectangle1: {
    width: responsiveWidth(75),
    backgroundColor: colors.secondaryGreen,
    height: 100,
  },
  rectangle2: {
    width: responsiveWidth(20),
    backgroundColor: colors.secondaryGreen,
    height: 100,
    padding: 10,
    justifyContent: 'center',
  },
  innerCircle1: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    backgroundColor: colors.white_lvl_3,
    marginTop: -25 / 2,
  },
  innerCircle2: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    backgroundColor: colors.white_lvl_3,
    marginBottom: -25 / 2,
  },
});

export default style;
