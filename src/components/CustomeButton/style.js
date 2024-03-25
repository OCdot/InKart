import { Dimensions, StyleSheet } from "react-native";
import colors from "../common/colors";

const {width,height} = Dimensions.get('screen')
const style = StyleSheet.create({
    button : {
        padding : width *.03,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : width *.03,
        flexDirection : 'row',
        marginRight : width *.03,
    },
    icon : {
        width : width * 0.05,
        height : width *.05,
        marginRight :  width *.03,
    }
})

export default style;