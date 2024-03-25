import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import style from './style';
import colors from '../common/colors';

const CustomButton = props => {
  const {type, handleButtonPress, buttonText,icon} = props;
  return (
    <TouchableOpacity
      onPress={handleButtonPress}
      style={[
        style.button,
        {
          backgroundColor:
            type === 'primary' ? colors.primaryGreen : colors.secondaryGreen,
        },
      ]}>
        {type !== 'primary' ? <Image style = {style.icon}  source={icon}/>: null}
      <Text
        style={{
          color: type === 'primary' ? colors.white : colors.black_lvl_2,
          fontFamily:
            type === 'primary' ? 'Poppins-SemiBold' : 'Poppins-Regular',
            fontSize :  type === 'primary' ? 20 : 18,
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
