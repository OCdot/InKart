import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
  },
  topBg: {
    width: width,
    height: height * 0.2,
    resizeMode: 'cover',
  },
  ScrollView: {
    flex: 1,
    backgroundColor: colors.white_lvl_1,
    marginTop: -width * 0.1,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    overflow: 'hidden',
    padding: width * 0.03,
    
  },
  logo: {
    width: width * 0.3,
    height: height * 0.1,
    resizeMode: 'stretch',
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 23,
    color: colors.steel,
  },
  createNew: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: width * 0.03,
    paddingBottom : width * 0.1,
  },
  footer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryGreen,
  },
  dottedLineContainer: {
    marginVertical: 15,
  },
  overflow: {
    overflow: 'hidden'
  },
  dashedLine : {
    borderStyle : 'dashed',
    borderWidth : 2,
    borderColor : colors.grey,
    margin : -2,
    marginBottom : 0,
  },
  textContainer : {
    justifyContent : 'center',
    alignItems :'center',
    alignSelf : 'center',
    marginTop : -13,
    backgroundColor : colors.white_lvl_2,
    width : 110,
  },
  dashedText : {
    textAlign : 'center',
    color : colors.black_lvl_3,
    fontFamily : 'Poppins_Regular',
    fontSize :14
  },
  errorText : {
    color : colors.error,
    fontFamily : 'Poppins-Regular'
  },
});

export default style;
