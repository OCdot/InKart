import { StyleSheet } from "react-native";
import colors from "../../../components/common/colors";
const style = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'row',
        justifyContent : 'space-between',
        padding : 10,
        borderBottomColor : colors.black_lvl_3,
        borderBottomWidth : 1
    },
    leftContainer :{},
    rightContainer : {},
    orderHead :{
        fontFamily : 'Poppins-Bold',
        fontSize : 20,
        color : colors.black
    },
    detailTxt :{
        fontFamily : 'Poppins-Regular',
        fontSize : 15,
        color : colors.black,
        
    },
    totalContainer : {
        flexDirection: 'row',
        justifyContent : 'space-between',
        padding : 10,
    },
    totalHead : {
        fontFamily : 'Poppins-Medium',
        fontSize : 20,
        color : colors.black,
        padding : 10,
        paddingRight : 39,
    },

})
export default style;