import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import style from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../common/colors';
const CustomTextInput = props => {
  const {
    type,
    handleText,
    placeholder,
    value,
    check = false,
    multiline = false,
  } = props;
  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type === 'phone'
      ? 'phone-pad'
      : 'default';
  const secureTextEntry = type === 'password' ? (show ? false : true) : false;
  const icon =
    type === 'email'
      ? require('../../assets/images/email.png')
      : type === 'password'
      ? show
        ? require('../../assets/images/view.png')
        : require('../../assets/images/hide.png')
      : false;
  const handlePassword = () => {
    setShow(!show);
  };
  return (
    <View style={style.container}>
      <TextInput
        numberOfLines={multiline? 5: 1}
        style={[
          style.textInput,
          {
            height: multiline ? hp('18%') : hp('5%'),
            width: multiline ? wp('90%') : wp('70%'),
            
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        selectionColor={colors.primaryGreen}
        onChangeText={handleText}
        value={value}
      />
      {check ? <Text style={style.check}>Check</Text> : null}
      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePassword}
          disabled={type != 'password' ? true : false}>
          <Image style={style.icon} source={icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
