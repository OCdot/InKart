import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useId, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import UseOrientation from '../../components/common/orientation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';
import CommonButton from '../../components/CommonButton';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
import RazorpayCheckout from 'react-native-razorpay';
import firestore from '@react-native-firebase/firestore';
import MapView, {Marker} from 'react-native-maps';
import colors from '../../components/common/colors';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';

const AddAddress = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const {userId, email, mobile, firstName, lastName} = useSelector(
    state => state,
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const route = useRoute();
  const {cartProducts, total} = route.params;
  // console.warn('total',total);
  // console.warn('cartProducts',cartProducts);

  useEffect(() => {
    getCurrentLoction();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
    });
  }, []);

  const [newPosition, setNewPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState('');

  const handleCreateOrder = async paymentId => {
    const smallId = paymentId.slice(4, 12);
    await firestore()
      .collection('Orders')
      .add({
        orderId: String(smallId).toUpperCase(),
        created: Date.now(),
        updated: Date.now(),
        orderStatus: 'Ordered',
        totalAmount: total,
        userId: userId,
        address: address,
        paymentMethode: 'Online',
        cartItems: cartProducts,
        userName: firstName + ' ' + lastName,
        userEmail: email,
        userPhone: mobile,
        expDelDate: '',
      })
      .then(async resp => {
        await firestore()
          .collection('Cart')
          .where('userId', '==', userId)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref
                .delete()
                .then(() => {
                  setLoading(false);
                  Snackbar.show({
                    text: 'Order Placed',
                    textColor: colors.white,
                    backgroundColor: colors.primaryGreen,
                    duration: Snackbar.LENGTH_SHORT,
                  });
                  dispatch(updateCartCount(0));
                  setTimeout(() => {
                    navigation.goBack();
                  }, 2000);
                })
                .catch(err => console.warn(err));
            });
          });
      });
  };

  const getCurrentLoction = () => {
    Geolocation.getCurrentPosition(info => {
      setNewPosition({
        latitude: info.coords?.latitude ?? 0,
        longitude: info.coords?.longitude ?? 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
      Snackbar.show({
        text: 'Current Location is Fetched',
        backgroundColor: colors.primaryGreen,
        textColor: colors.white,
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };
  // console.warn('total',total);
  const onButtonPress = () => {
    var options = {
      description: 'Inkart Products purchased',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_CXo5HbmQ83IYL0', // Your api key
      amount: String(total, 10) * 100,
      name: 'Inkart',
      prefill: {
        email: email,
        contact: mobile,
        name: `${firstName} ${lastName}`,
      },
      theme: {color: '#149c19'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        setLoading(true);
        handleCreateOrder(data.razorpay_payment_id);
        // handle success
        console.log('====================================');
        console.log(data.razorpay_payment_id);
        console.log('====================================');
      })
      .catch(error => {
        // handle failure
        // console.log('====================================');
        // console.log(`Error: ${error.code} | ${error.description}`);
        // console.log('====================================');
        Snackbar.show({
          text: 'Order Faild..!',
          textColor: colors.white,
          backgroundColor: colors.danger,
          duration: Snackbar.LENGTH_SHORT,
        });
        navigation.goBack();
      });
  };

  return (
    <ScrollView
      style={responsiveStyle.mainContainer}
      keyboardShouldPersistTaps="always">
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Search location"
          currentLocation={true}
          fetchDetails={true}
          currentLocationLabel="Current Location"
          query={{
            key: 'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
            language: 'en',
          }}
          styles={{
            textInput: responsiveStyle.textInput,
            predefinedPlacesDescription: responsiveStyle.description,
          }}
          onPress={(data, details) => {
            console.warn(data, details);

            const location =
              data?.geometry?.location ?? details?.geometry?.location;
            const positionData = {
              latitude: location?.lat ?? 0,
              longitude: location?.lng ?? 0,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            };
            setNewPosition(positionData);
            setAddress(data.name ?? data.description);
          }}
          // onFail={fail => console.warn('fail', fail)}
          // onNotFound={notfound => console.warn('not found', notfound)}
        />

        <MapView
          style={responsiveStyle.mapView}
          initialRegion={newPosition}
          region={newPosition}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomControlEnabled={true}
          pitchEnabled={true}
          scrollEnabled={true}
          rotateEnabled={true}
          currentLocationLabel="Current Location"
          showsMyLocationButton={true}>
          <Marker
            title={address}
            coordinate={newPosition}
            description="You Are Here"
          />
        </MapView>
        {address && (
          <View style={{paddingHorizontal: 15}}>
            <Text
              style={{
                color: colors.black_lvl_3,
                fontFamily: 'Poppins-Regular',
              }}>
              {address}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={responsiveStyle.touchView}
        onPress={getCurrentLoction}>
        <View style={responsiveStyle.iconView}>
          <FontAwesome name="location-arrow" size={20} color={colors.white} />
        </View>
        <Text style={responsiveStyle.touchTxt}>Your Current Location</Text>
      </TouchableOpacity>

      <View style={responsiveStyle.btnContainer}>
        <CommonButton
          buttonTxt="Confirm Location & Proceed"
          onButtonPress={onButtonPress}
        />
      </View>
    </ScrollView>
  );
};
export default AddAddress;
