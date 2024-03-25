import { Text, View } from "react-native"
import UseOrientation from "../../../components/common/orientation"
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from "./style";
import colors from "../../../components/common/colors";

const MoreInfo = props =>{
    const orientation = UseOrientation()
    const responsiveStyle  = style(orientation.orientation)

    return(
        <View style={responsiveStyle.listContainerMain}>
        <View style={responsiveStyle.listContainer}>
          <Text style ={responsiveStyle.listTxt}>1/₹400</Text>
          <AntDesign name="down" size={20} color={colors.grey} />
        </View>
        <View style={responsiveStyle.listContainer}>
          <Text style ={responsiveStyle.listTxt}>Delivery Time</Text>
          <AntDesign name="down" size={20} color={colors.grey} />
        </View>
      </View>
    )
}
export default MoreInfo