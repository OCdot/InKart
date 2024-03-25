import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useId} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
import CommonSectionHeader from '../CommonSectionHeader';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount, updateWishIds} from '../../storage/action';
import Snackbar from 'react-native-snackbar';
import colors from '../common/colors';

const ProductScroll = props => {
  const navigation = useNavigation();
  const {isNavigationNeeded} = props;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection('Product')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });

          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const route = useRoute();
  const handleProduct = item => {
    if (route.name === 'ProductDetails') {
      isNavigationNeeded(true, item);
    } else {
      navigation.navigate('ProductDetails', {product: item});
    }
  };

  const userId = useSelector(state => state.userId);
  const cartCount = useSelector(state => state.cartCount);
  const wishIds = useSelector(state => state.wishIds);
  const dispatch = useDispatch();
  // console.warn('product scroll',route.name);

  const addToCart = async item => {
    // console.warn('Cart' , item);
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            detail: item.detail,
            name: item.name,
            price: item.price,
            qty: 1,
            userId: userId,
            productId: item.id,
            image: item.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              qty: parseInt(snapshot?.docs[0].data().qty) + 1,
            });
        }
      });
  };

  const addToWishlist = productDetails => {
    // console.warn(productDetails);
    firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .where('productId', '==', productDetails.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('Wishlist')
            .add({
              created: Date.now(),
              updated: Date.now(),
              detail: productDetails.detail,
              name: productDetails.name,
              price: productDetails.price,
              userId: userId,
              productId: productDetails.id,
              image: productDetails.image,
              categoryId: productDetails.categoryId,
              productId: productDetails.id,
            })
            .then(resp => {
              dispatch(updateWishIds([...wishIds,productDetails.id]))
              Snackbar.show({
                text: 'Added To Wishlist',
                backgroundColor: colors.primaryGreen,
                fontFamily: 'Poppins-Regular',
                duration: Snackbar.LENGTH_SHORT,
              });
            });
        } else {
          Snackbar.show({
            text: 'Item Already In your Wishlist',
            textColor: colors.white,
            backgroundColor: colors.danger,
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      });
  };

  return (
    <View style={style.mainContainer}>
      <CommonSectionHeader
        head="Newly Added"
        content="payless, Get More"
        rightTxt="See All"
      />

      <View style={style.FlatListMainContainer}>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={style.FlatListContainer}>
                <TouchableOpacity
                  style={{alignItems: 'flex-end'}}
                  onPress={() => addToWishlist(item)}>
                  {wishIds.includes(item.id) ? (
                    <AntDesign name="heart" size={30} color={colors.danger} />
                  ) : (
                    <AntDesign name="hearto" size={30} color={colors.danger} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleProduct(item)}>
                  <Image source={{uri: item.image}} style={style.FlatListImg} />

                  <View>
                    <Text style={style.name}>{item.name}</Text>
                    <Text style={style.detail}>{item.detail}</Text>
                  </View>
                </TouchableOpacity>
                <View style={style.footerContainer}>
                  <View>
                    <Text style={style.price}> ₹ {item.price}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={style.plusView}>
                    <Text style={style.plus}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductScroll;
