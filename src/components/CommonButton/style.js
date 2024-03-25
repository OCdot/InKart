import {StyleSheet} from 'react-native';
import colors from '../common/colors';

const style = orientation => StyleSheet.create({
    container :{
        backgroundColor : colors.primaryGreen,
        padding :15,
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius : 15,
    },
    txt : {
        color : colors.white,
        fontFamily : 'Poppins-Bold',
        fontSize :18
    }
});
export default style;
