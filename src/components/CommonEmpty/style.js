import { StyleSheet } from "react-native";
import colors from "../common/colors";

const style = orientation => StyleSheet.create({
    container : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center',
        // borderWidth : 1
    },
    Txt : {
        fontFamily : 'Poppins-Regular',
        color : colors.danger,
        fontSize :20,
    },
})
export default style