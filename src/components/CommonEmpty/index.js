import { Text, View } from "react-native"
import UseOrientation from "../common/orientation"
import style from "./style";


const CommonEmpty = pros =>{
    const orientation = UseOrientation();
    const responsiveStyle = style(orientation.orientation)
    return(
        <View style = {responsiveStyle.container}>
            <Text style = {responsiveStyle.Txt}>{pros.title}</Text>
        </View>
    )
}
export default CommonEmpty