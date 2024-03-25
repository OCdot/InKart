import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import colors from '../../../components/common/colors';

export default function OrderTotal(props) {
  const {total,charges} = props
  // console.warn(props);
  return (
    <View>
      <View style={style.container}>
        <View>
          <Text style={style.orderHead}>Order Details</Text>
          <Text style={style.detailTxt}>Bag Total</Text>
          <Text style={style.detailTxt}>Bag Savings</Text>
          <Text style={style.detailTxt}>Coupon Discount</Text>
          <Text style={style.detailTxt}>Delivery</Text>
        </View>
        <View>
          <Text style={[style.orderHead, {color: colors.white_lvl_3}]}>.</Text>
          <Text style={style.detailTxt}>₹{parseFloat(total).toFixed(2)}</Text>
          <Text style={[style.detailTxt, {color: colors.primaryGreen}]}>
            0.00
          </Text>
          <Text style={[style.detailTxt, {color: colors.danger}]}>
            Apply Coupon
          </Text>
          <Text style={style.detailTxt}>₹{parseFloat(charges).toFixed(2)}</Text>
        </View>
      </View>
      <View style ={style.totalContainer}>
      <Text style={style.totalHead}>Order Details</Text>
      <Text style={style.totalHead}>₹{parseFloat(total + charges).toFixed(2)}</Text>
      </View>
    </View>
  );
}
