import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import style from './style';

import {useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import UseOrientation from '../../components/common/orientation';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomeButton';
import ImagePicker from 'react-native-image-crop-picker';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/common/validation';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {updateProfile} from '../../storage/action';
import { updateProfileImage } from './controler';

const Account = () => {
  const navigation = useNavigation();
  const orientation = UseOrientation();
  const dispatch = useDispatch();

  const responsiveStyle = style(orientation.orientation);
  const {firstName, lastName, email, mobile, userId,profileimage} = useSelector(
    state => state,
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const handleOpenImg = () => {
    setModal(!modal);
  };

  const handleEditImg = () => {
    setModalChoose(true);
  };
  const handleGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // console.log(image);
        setProfileImage(image.path ?? '');

        setModalChoose(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const hanleCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // console.log(image);
        setProfileImage(image.path ?? '');

        setModalChoose(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdateProfile = async () => {
    // console.warn(phone);
    if (phone !== '') {
      if (validatePhoneNumber(phone.trim())) {
        if (validateEmail(mail.trim())) {
          if (fName.trim() !== '' && lName !== '') {
            let newUrl = profileimage
            if (profileImage !== '') {
              newUrl =await updateProfileImage(profileImage)
            }
            // console.warn('NEW_URL',newUrl);
            // console.warn('true');
            await firestore()
              .collection('Users')
              .doc(userId)
              .update({
                firstName: fName,
                lastName: lName,
                email: mail,
                mobile: phone,
                profileimage: newUrl ,
              })
              .then(() => {
                dispatch(
                  updateProfile({
                    firstName: fName,
                    lastName: lName,
                    email: mail,
                    mobile: phone,
                    profileimage: newUrl,
                  }),
                );
                // setProfileImage('')
                Snackbar.show({
                  text: 'Profile Updated Sucessfully..',
                  backgroundColor: colors.primaryGreen,
                  textColor: colors.white,
                  duration: Snackbar.LENGTH_SHORT,
                  fontFamily: 'Poppins-Regular',
                });
              });
          } else {
            Snackbar.show({
              text: 'Fill Up All Fields',
              backgroundColor: colors.danger,
              textColor: colors.white,
              duration: Snackbar.LENGTH_SHORT,
            });
          }
        } else {
          Snackbar.show({
            text: 'Invalid E-mail Address',
            backgroundColor: colors.danger,
            textColor: colors.white,
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        Snackbar.show({
          text: 'Please Enter a Valid Number',
          backgroundColor: colors.danger,
          textColor: colors.white,
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    }
  };

  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);
  const [mail, setMail] = useState(email);
  const [phone, setPhone] = useState(mobile);
  return (
    <ScrollView style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>
        {firstName} {lastName}
      </Text>
      <View style={responsiveStyle.imgView}>
        <TouchableOpacity onPress={handleOpenImg}>
          <Image
            style={responsiveStyle.img}
            source={
              profileImage === ''
                ? profileimage === '' ? require('../../assets/images/hacker.png') : {uri : profileimage}
                : {uri: profileImage}
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleEditImg}
          style={responsiveStyle.editTouch}>
          <Image
            style={responsiveStyle.edit}
            source={require('../../assets/images/edit-dp.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={responsiveStyle.field}>
        <CustomTextInput
          handleText={text => setFName(text)}
          placeholder="First Name"
          value={fName}
        />
        <CustomTextInput
          handleText={text => setLName(text)}
          placeholder="Last Name"
          value={lName}
        />
        <CustomTextInput
          handleText={text => setMail(text)}
          placeholder="e-mail"
          type="email"
          value={mail}
        />
        <CustomTextInput
          handleText={text => setPhone(text)}
          placeholder="Mobile Number"
          value={phone}
        />
        <CustomButton
          type="primary"
          handleButtonPress={handleUpdateProfile}
          buttonText="Update Profile"
        />
      </View>

      <Modal transparent visible={modal} onRequestClose={() => setModal(false)}>
        <View style={responsiveStyle.bigImgView}>
          <TouchableOpacity
            style={responsiveStyle.close}
            onPress={() => setModal(false)}>
            <Image
              style={responsiveStyle.edit}
              source={require('../../assets/images/cross.png')}
            />
          </TouchableOpacity>
          <Image
            style={responsiveStyle.bigImg}
            source={
              profileImage === ''
                ? require('../../assets/images/hacker.png')
                : {uri: profileImage}
            }
          />
        </View>
      </Modal>

      <Modal
        transparent
        visible={modalChoose}
        onRequestClose={() => setModalChoose(false)}>
        <View style={responsiveStyle.bigImgView}>
          <TouchableOpacity
            style={responsiveStyle.close}
            onPress={() => setModalChoose(false)}>
            <Image
              style={responsiveStyle.edit}
              source={require('../../assets/images/cross.png')}
            />
          </TouchableOpacity>
          <View style={responsiveStyle.selectBox}>
            <TouchableOpacity
              onPress={handleGallery}
              style={responsiveStyle.touch}>
              <Text style={responsiveStyle.touchTxt}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={hanleCamera}
              style={responsiveStyle.touch}>
              <Text style={responsiveStyle.touchTxt}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
export default Account;
