import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../CustomeButton';
import CommonButton from '../CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../storage/action';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {firstName, lastName, email, profileimage} = useSelector(
    state => state,
  );
  //  console.warn(lastName);
  const contents = [
    {
      itemId: 0,
      itemName: 'Home',
      navigateTo: 'MyFooter',
      icon: require('../../assets/images/home.png'),
    },
    {
      itemId: 1,
      itemName: 'Shop by Category',
      navigateTo: 'Categories',
      icon: require('../../assets/images/categories.png'),
    },
    {
      itemId: 2,
      itemName: 'Orders',
      navigateTo: 'Orders',
      icon: require('../../assets/images/checkout.png'),
    },
    {
      itemId: 3,
      itemName: 'Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../assets/images/heart.png'),
    },
    {
      itemId: 4,
      itemName: 'Account',
      navigateTo: 'Account',
      icon: require('../../assets/images/user.png'),
    },
  ];

  const handleSignOut = () => {
    dispatch(signout());
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      false
      style={style.mainContainer}>
      <TouchableOpacity onPress={() => {navigation.navigate('Account')}} style={style.container}>
        <View style={style.avatar}>
          <Image
            style={style.img}
            source={
              profileimage === ''
                ? require('../../assets/images/hacker.png')
                : {uri: profileimage}
            }
          />
        </View>
        <View style={style.details}>
          <Text style={style.user}>
            {firstName} {lastName}
          </Text>
          <Text style={style.userInfo}>{email}</Text>
        </View>
      </TouchableOpacity>

      <View style={style.drawerContainer}>
        {contents.map((item, index) => {
          return (
            <TouchableOpacity
              style={style.touchableOpacity}
              key={item.itemId}
              onPress={() => navigation.navigate(item.navigateTo)}>
              <Image source={item.icon} style={style.icon} />
              <Text style={style.listText}>{item.itemName}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        <TouchableOpacity onPress={handleSignOut} style={style.logout}>
          <Image
            source={require('../../assets/images/logout.png')}
            style={style.icon}
          />
          <Text style={style.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={style.supportContainer}>
        <Text style={style.supportHead}>Contact Support</Text>
        <Text style={style.supportTxt}>
          If you Have Any Problem With The App, Feel Free To Contact
        </Text>

        <CommonButton buttonTxt="Contact" />
      </View>
    </ScrollView>
  );
};
export default CustomDrawer;
