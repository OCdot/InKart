import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomeButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/common/validation';
import colors from '../../components/common/colors';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Home from '../Home';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  

  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '322352427605-3v0jde7bccua57rom2do3up6jhp30fpu.apps.googleusercontent.com',
    });
  }, []);

  const handleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // // Get the users ID token
      // const { idToken } = await GoogleSignin.signIn();

      // // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // // Sign-in the user with the credential
      // return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleToLogin = () => {
    navigation.goBack();
  };
  const handleSignUp = async () => {
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      cpassword.trim() !== '' &&
      email.trim() !== '' &&
      mobile.trim() !== ''
    ) {
      if (validateEmail(email.trim())) {
        if(validatePhoneNumber(mobile.trim())){
          if (password.trim() === cpassword.trim()) {
            await firestore()
              .collection('Users')
              .where('username', '==', username.trim())
              .where('email', '==', email.trim())
              .get()
              .then(async snapshot => {
                if (snapshot.empty) {
                  if (validateEmail(email.trim())) {
                    if (validatePhoneNumber(mobile.trim())) {
                      const userData = {
                        username: username,
                        email: email,
                        password: password,
                        mobile: mobile,
                        created: String(new Date()),
                        updated: String(new Date()),
                      };
  
                      await firestore()
                        .collection('Users')
                        .add(userData)
                        .then(resp => {
                          Snackbar.show({
                            text: ' SUCCESS !!! ',
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor: colors.primaryGreen,
                            textColor: colors.white_lvl_2,
                          });
                          navigation.navigate(Home);
                        })
                        .catch(err => {
                          console.warn(err);
                        });
                    } else {
                      setError('Inavlid Mobile Number');
                    }
                  } else {
                    setError('Invalid Email');
                  }
                } else {
                  Snackbar.show({
                    text: 'Account already Exists ',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.error,
                    textColor: colors.white_lvl_2,
                  });
                }
              });
          } else {
            setError('Password Should be Same !!');
          }
        }else{
          setError('Invalid Mobile Number !!');
        }
       
      } else {
        setError('Invalid e-mail !!');
      }
    } else {
      setError('All Fields should Fill !!');
    }
  };
  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/images/topBg.jpg')}
        style={style.topBg}
      />
      <ScrollView style={style.ScrollView} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/logo-removebg-preview.png')}
          style={style.logo}
        />
        <Text style={style.loginText}>Sign Up Account</Text>
        <View>
          <Text style={style.errorText}>{error}</Text>
        </View>
        <CustomTextInput
          placeholder="User Name"
          handleText={text => setUsername(text)}
        />
        <CustomTextInput
          placeholder="Email Address"
          type="email"
          handleText={text => setEmail(text)}
        />
        <CustomTextInput
          placeholder="Mobile Number"
          type="phone"
          handleText={text => setMobile(text)}
        />
        <CustomTextInput
          placeholder="Password"
          type="password"
          handleText={text => setCpassword(text)}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          type="password"
          handleText={text => setPassword(text)}
        />

        <CustomButton
          type="primary"
          handleButtonPress={handleSignUp}
          buttonText="Sign Up"
        />

        <View style={style.dottedLineContainer}>
          <View style={style.overflow}>
            <View style={style.dashedLine} />
          </View>
          <View style={style.textContainer}>
            <Text style={style.dashedText}>Or SignUp With</Text>
          </View>
        </View>

        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText="Sign Up with  Google"
          icon={require('../../assets/images/search.png')}
        />

        <Text style={style.createNew} onPress={handleToLogin}>
          Go To Login
        </Text>
      </ScrollView>
    </View>
  );
};
export default SignUp;
