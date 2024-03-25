import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, ScrollView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UseOrientation from '../../components/common/orientation';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import colors from '../../components/common/colors';
import CustomButton from '../../components/CustomeButton';
import Snackbar from 'react-native-snackbar';

const OrderDetails = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const [loading, setLoading] = useState(false);
  // console.warn(item);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CommonHeaderLeft
          type={'back'}
          action={() => navigation.navigate('Orders')}
        />
      ),
    });
  }, []);

  const reOrder = async () => {
    try {
      setLoading(true);
      const smallId = Math.random();
      // console.warn("ok");
      await firestore()
        .collection('Orders')
        .add({
          orderId: String(smallId).slice(4, 12).toUpperCase(),
          created: Date.now(),
          updated: Date.now(),
          orderStatus: 'Ordered',
          totalAmount: item.totalAmount,
          userId: item.userId,
          address: item.address,
          paymentMethode: 'Online',
          cartItems: item.cartItems,
          userName: item.userName,
          userEmail: item.userEmail,
          userPhone: item.userPhone,
          expDelDate: '',
        })
        .then(async res => {
          // console.warn("ok");
          Snackbar.show({
            text: 'Order Placed',
            textColor: colors.white,
            backgroundColor: colors.primaryGreen,
            duration: Snackbar.LENGTH_SHORT,
          });
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.white} />
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={responsiveStyle.scrollViewContainer}>
        <View style={responsiveStyle.innerContainer}>
          <FontAwesome5 name="box" size={35} color={colors.white} />
          <View style={responsiveStyle.orderContainer}>
            <Text style={responsiveStyle.idTxt}>
              Order Id : {item.orderId}{' '}
            </Text>
            <Text style={responsiveStyle.statusTxt}>{item.orderStatus}</Text>
          </View>
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={responsiveStyle.item}>Items</Text>
          {item?.cartItems &&
            item.cartItems.map((ele, index) => {
              return (
                <View style={responsiveStyle.cartContainer} key={index}>
                  <View style={responsiveStyle.qtyView}>
                    <Text style={responsiveStyle.qty}>{ele.qty}</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <FontAwesome5
                      name="star-of-life"
                      size={20}
                      color={colors.black_lvl_3}
                    />
                  </View>
                  <View style={responsiveStyle.cartDetailsView}>
                    <Text style={responsiveStyle.itemName}>{ele.name}</Text>
                    <Text style={responsiveStyle.itemDetail}>{ele.detail}</Text>
                  </View>
                  <Text style={responsiveStyle.price}> ₹ {ele.price}</Text>
                </View>
              );
            })}
        </View>

        <View style={responsiveStyle.paymentContainer}>
          <Text style={responsiveStyle.item}>Payment Details</Text>
          <View style={responsiveStyle.paymentInnerContainer}>
            <View style={responsiveStyle.leftView}>
              <Text style={responsiveStyle.paymentDetails}>Bag Total</Text>
              <Text style={responsiveStyle.paymentDetails}>
                Coupon Discount
              </Text>
              <Text style={responsiveStyle.paymentDetails}>Delivery</Text>
            </View>
            <View style={responsiveStyle.rightView}>
              <Text style={responsiveStyle.paymentDetails}>₹ 499</Text>
              <Text style={responsiveStyle.coupon}>Apply Coupon</Text>
              <Text style={responsiveStyle.paymentDetails}>100</Text>
            </View>
          </View>
          <View style={responsiveStyle.TAcontainer}>
            <Text style={responsiveStyle.TA}>Total Amount</Text>
            <Text style={responsiveStyle.amount}>₹ {item.totalAmount}</Text>
          </View>
        </View>

        <View>
          <Text style={responsiveStyle.item}>Address</Text>
          <Text style={responsiveStyle.itemDetail}>OC</Text>
          <Text style={responsiveStyle.itemDetail}>House Name, LandMark</Text>
          <Text style={responsiveStyle.itemDetail}>Pin : 908765</Text>
        </View>
        <View>
          <Text style={responsiveStyle.item}>Payment Methode</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <FontAwesome5 name="credit-card" size={28} color={colors.black} />
            <View style={responsiveStyle.cardDetailsView}>
              <Text style={responsiveStyle.cardDetails}>
                **** **** **** 9812
              </Text>
              <Text style={responsiveStyle.cardDetails}>
                {item.paymentMethode}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{position: 'absolute', bottom: 0, width: '100%', padding: 15}}>
        <CustomButton
          type="primary"
          buttonText="Re-Order"
          handleButtonPress={reOrder}
        />
      </View>
    </View>
  );
};
export default OrderDetails;
