import {Image, Text, View, TouchableOpacity} from 'react-native';
import style from './style';
import CommonHeader from '../../components/CommonHeader';
import { useDispatch, useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';
import { updateCartCount } from '../../storage/action';

const CustomFooter = ({state, descriptors, navigation}) => {

  const cartCount =useSelector(state =>state.cartCount)
  const userId =useSelector(state =>state.userId)

  const [cartProducts, setCartProducts] = useState([]);
 useEffect(() => {
  getCartProducts();
 }, [])
 
 const dispatch = useDispatch()
  // console.warn(userId);
  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        // console.warn('SIZE',snapshot.size);
        dispatch(updateCartCount(snapshot.size))
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index; // cheacking our current index with index we get with route
        const icon =
          route.name === 'Home'
            ? require('../../assets/images/home.png')
            : route.name === 'Categories'
            ? require('../../assets/images/categories.png')
            : route.name === 'Search'
            ? require('../../assets/images/loupe.png')
            : route.name === 'Offers'
            ? require('../../assets/images/sale.png')
            : require('../../assets/images/shopping-cart.png');
        return (
          <TouchableOpacity
            key={index}
            style={style.innerContainer}
            onPress={() => navigation.navigate(route.name)}>
            <Image style={style.footerIcon} source={icon} />
            <Text style={style.footerText}>{route.name}</Text>
            {isFocused ? (
              route.name === 'Categories' ? (
                <Text style={style.dot}>_____</Text>
              ) : (
                <Text style={style.dot}>___</Text>
              )
            ) : null}

            {route.name === 'Cart' ? (
              <View>
                <View style={style.cartCountView}>
                  <Text style={style.cartCount}>{cartCount}</Text>
                </View>
                {/* <View style ={style.iconView}>
                <Image
                  style={style.icon}
                  source={require('../../assets/images/checkout.png')}
                />
              </View> */}
              </View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomFooter;
