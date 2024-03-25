import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomeButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {validateOtp, validatePhoneNumber} from '../../components/common/validation';
import colors from '../../components/common/colors';
import Snackbar from 'react-native-snackbar';
import Home from '../Home';
import { useDimensionContext } from '../../context';

const LoginPhone = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [showOtpField, setShowOtpField] = useState(false);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  const handleVerifyOtp = async () => {
    if (otp.trim() !== '' && validateOtp(otp.trim())) {
      const res = await confirm.confirm(otp.trim());
      if (res) {
        Snackbar.show({
          text: ' Phone Number Verified ',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.primaryGreen,
          textColor: colors.white_lvl_2,
        });
        navigation.navigate(Home);
      }
    }else{
      setError('Incorrect OTP');
    }
  };
  const handleButtonPress = async () => {
    try {
      setError(null);

      // const confirmation = await auth().signInWithPhoneNumber(phone);

      if (validatePhoneNumber(phone.trim())) {
        const confirmation = await auth().signInWithPhoneNumber(phone);

        if (confirmation) {
          Snackbar.show({
            text: ' Verification code is send to your Mobile Number ',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.primaryGreen,
            textColor: colors.white_lvl_2,
          });
          setShowOtpField(true);
          setConfirm(confirmation);
        }
      } else {
        Snackbar.show({
          text: ' Invalid Phone Number ',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.danger,
          textColor: colors.white_lvl_2,
        });
      }
    } catch (err) {
      setError('Given Number is Incorrect');
    }
  };
  const handleToLogin = () => {
    navigation.goBack();
  };
  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/topBg.jpg')}
        style={responsiveStyle.topBg}
      />
      <ScrollView style={responsiveStyle.ScrollView} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo-removebg-preview.png')}
          style={responsiveStyle.logo}
        />
        <Text style={responsiveStyle.loginText}>Login With Phone</Text>
        {error !== null ? <Text style={responsiveStyle.errorText}>{error}</Text> : null}
        <CustomTextInput
          placeholder="Phone Number"
          type="phone"
          handleText={text => setPhone(text)}
        />

        {showOtpField ? (
          <CustomTextInput
            placeholder="Enter OTP"
            type="phone"
            handleText={text => setOtp(text)}
          />
        ) : null}

        <CustomButton
          type="primary"
          handleButtonPress={showOtpField ? handleVerifyOtp : handleButtonPress}
          buttonText={showOtpField ? 'Verify OTP ' : 'Sign In With Phone'}
        />
        <Text style={responsiveStyle.createNew} onPress={handleToLogin}>
          Go To Login
        </Text>
      </ScrollView>
    </View>
  );
};
export default LoginPhone;
