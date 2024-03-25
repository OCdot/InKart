import {Text, View} from 'react-native';
import UseOrientation from '../../../components/common/orientation';
import style from './style';
import CustomTextInput from '../../../components/CustomTextinput';

const DeliveryInfo = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  return (
    <View>
      <Text style={responsiveStyle.deliveryhead}>Check Delivery</Text>
      <Text style={responsiveStyle.commonTxt}>
        Enter Pincode to Check Delivery Date
      </Text>
      <CustomTextInput placeholder="Pincode" check={true} />

      <Text style={responsiveStyle.commonTxt}>
        Free Delivery On Orders Above ₹500.00
      </Text>
      <Text style={responsiveStyle.commonTxt}>
        Cash On Delivery Available
      </Text>
      <Text style={responsiveStyle.commonTxt}>
        7 Days Replacement
      </Text>
    </View>
  );
};
export default DeliveryInfo;
