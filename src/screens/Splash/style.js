import { StyleSheet } from "react-native";
import colors from "../../components/common/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.white_lvl_2
    },
    image : {
        height : hp('30%'),
        width: hp('30%'),
        resizeMode : 'contain'
    }
})
export default style