import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../components/common/colors';

const style = StyleSheet.create({
    container : {
        backgroundColor : colors.white_lvl_3,
        borderRadius :15,
        margin : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    flatlist : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    flatlistView : {
        justifyContent :'center',
        alignItems : 'center',
        marginRight : 10,
        marginBottom : 10,
        
        
    },
    imgView : {
        backgroundColor : colors.white_lvl_2,
        borderRadius : 10,
        width : wp('15%'),
        height : hp('8%'),
        justifyContent : 'center',
        alignItems :'center',
        padding :10

    },
    flatlistImg : {
        height : hp('10%'),
        width : wp('10%'),
        resizeMode : 'contain'
    },
    headTxt : {
        fontFamily : 'Poppins-Bold',
        fontSize : 20,
        padding : 5,
        marginLeft : 20,

    },
    itemTxt : {
        marginTop : 5,
        fontFamily : 'Poppins-Regular',
        color : colors.black_lvl_2
    },
});

export default style;

