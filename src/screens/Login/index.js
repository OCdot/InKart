import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomeButton';
import {useNavigation} from '@react-navigation/native';
import SignUp from '../SignUp';
import LoginPhone from '../LoginPhone';
import colors from '../../components/common/colors';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import Home from '../Home';
import auth from '@react-native-firebase/auth';
import {validateEmail} from '../../components/common/validation';
import {useDimensionContext} from '../../context';
import {useDispatch} from 'react-redux';
import {login} from '../../storage/action';

const Login = () => {
  // console.warn(dimensions);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const dispatch = useDispatch();

  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  function onAuthStateChanged(user) {
    // console.warn(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const handleButtonPress = () => {
    console.warn('OK');
  };
  const handleLogin = async () => {
    if (email.trim !== '' && password.trim() !== '') {
      if (validateEmail(email)) {
        await firestore()
          .collection('Users')
          .where('email', '==', email.trim().toLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: "Account Doens't Exists",
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.danger,
                textColor: colors.white_lvl_2,
              });
            } else {
              snapshot.forEach(documentSnapshot => {

                // console.warn(documentSnapshot.id);

                const respData = documentSnapshot.data();
                // console.warn(respData);
               
                if (password.trim() === respData.password) {
                  Snackbar.show({
                    text: ' Login SUCCESS !!! ',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.primaryGreen,
                    textColor: colors.white_lvl_2,
                  });
                  // console.warn(respData);
                  dispatch(
                    login({
                      userId : documentSnapshot.id,
                      firstName: respData.firstName,
                      lastName: respData.lastName,
                      email: respData.email,
                      mobile : respData.mobile,
                      profilimage : respData.profilimage
                    }),
                  );
                  // navigation.navigate('MyDrawer');
                } else {
                  Snackbar.show({
                    text: ' Wrong Password !!! ',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.danger,
                    textColor: colors.white_lvl_2,
                  });
                }
              });
            }
          })
          .catch(err => {
            console.warn(err);
          });
      } else {
        Snackbar.show({
          text: 'Invalid e-mail !!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.danger,
          textColor: colors.white_lvl_2,
        });
      }
    } else {
      Snackbar.show({
        text: "Fields Can't Be Empty!!",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.danger,
        textColor: colors.white_lvl_2,
      });
    }
  };
  const handleToSignUp = () => {
    navigation.navigate(SignUp);
  };
  const handleToLoginPhone = () => {
    navigation.navigate(LoginPhone);
  };
  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/topBg.jpg')}
        style={responsiveStyle.topBg}
      />
      <ScrollView
        style={responsiveStyle.ScrollView}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo-removebg-preview.png')}
          style={responsiveStyle.logo}
        />
        <Text style={responsiveStyle.loginText}>Login Account</Text>
        <CustomTextInput
          placeholder="Email Address"
          type="email"
          handleText={text => setEmail(text)}
        />
        <CustomTextInput
          placeholder="Password"
          type="password"
          handleText={text => setPassword(text)}
        />
        <CustomButton
          type="primary"
          handleButtonPress={handleLogin}
          buttonText="Sign In"
        />
        <Text style={responsiveStyle.createNew} onPress={handleToSignUp}>
          If you are new, Create here
        </Text>

        <View style={responsiveStyle.dottedLineContainer}>
          <View style={responsiveStyle.overflow}>
            <View style={responsiveStyle.dashedLine} />
          </View>
          <View style={responsiveStyle.textContainer}>
            <Text style={responsiveStyle.dashedText}>Or Login With</Text>
          </View>
        </View>

        <CustomButton
          type="secondary"
          handleButtonPress={handleToLoginPhone}
          buttonText="Sign In with Phone"
          icon={require('../../assets/images/smartphone.png')}
        />
        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText="Sign In with  Google"
          icon={require('../../assets/images/search.png')}
        />
      </ScrollView>
      <View style={responsiveStyle.footer}>
        <Text style={responsiveStyle.footerText}>Login as a Guest</Text>
      </View>
    </View>
  );
};
export default Login;
