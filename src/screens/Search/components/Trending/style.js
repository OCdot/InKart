import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../../../components/common/colors';
const style = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal : 10
  },
  trendHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveFontSize(2),
    color: colors.black,
  },
  flatlist: {
    alignItems: 'center',
    marginVertical: 15,
  },
  imgContainer: {
    padding: 10,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight : 10
  },
  image: {
    height: responsiveHeight(10),
    width: responsiveWidth(15),
    resizeMode: 'contain',
  },
});

export default style;
