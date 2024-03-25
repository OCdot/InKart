import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../components/common/colors';

const style = StyleSheet.create({
    flastListImage : {
        height : hp('25%'),
        width : wp('95%'),
        // padding : 1,
        resizeMode : 'contain'
    },
    flatListHead : {
        fontFamily : 'Poppins-Bold',
        // padding : 20,
        fontSize : 25,
        color : colors.white_lvl_2
    },
    flatLiistContent : {
        fontFamily : 'Poppins-Regular',
        fontSize : 19,
        color : colors.black_lvl_2
    },
    innerView : {
        padding : 20
    },
    touch : {
        backgroundColor : colors.lightGreen,
        padding : 15,
        width : wp('25%'),
        borderRadius : 13,
    },
    touchTxt : {
        color : colors.white_lvl_2,
        fontFamily : 'Poppins_Regular',
    },
});

export default style;
