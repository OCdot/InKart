import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../components/common/colors';

const style = StyleSheet.create({
    container : {
        backgroundColor : colors.secondaryGreen,
        borderRadius :15,
        margin : 10,
        

    },
    contentView : {
        backgroundColor : colors.white_lvl_2,
        padding : 10,
        margin : 10,
        borderRadius : 15,
        height : hp('15%'),
        alignItems : 'center',
        justifyContent : 'center',
        width : hp('10%'),
    },
    flastListImage : {
        height : hp('16%'),
        width : wp('10%'),
        // marginTop : -13,
        resizeMode : 'contain'
    },
    headTxt : {
        fontFamily : 'Poppins-Bold',
        fontSize : 20,
        padding : 5,
        marginLeft : 20,
        color : colors.black

    },
});

export default style;
