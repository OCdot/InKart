import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CommonSectionHeader from '../CommonSectionHeader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';

const OfferProducts = props => {
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

  return (
    <View style={style.mainContainer}>
      <CommonSectionHeader
        head="Say Hello To Offers"
        content="Best price Ever For All The Products"
        rightTxt="See All"
      />
      <View>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} />
          )}
        />
      </View>

      {/* <View style ={style.footer}>
        <View>
          <Text style = {style.footerTxt}>Didn't Find What You Are Looking For..?</Text>
        </View>
        <View style ={style.btnView}>
          <Text style ={style.btnTxt}>Search Here..</Text>
        </View>
      </View> */}
    </View>
  );
};

const RenderItem = ({item, index}) => {
  const {userId, cartCount} = useSelector(state => state);
  const [qty, setQty] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleProduct = item => {
    navigation.navigate('ProductDetails', {product: item});
  };

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

  return (
    <View style={style.FlatListContainer}>
      <TouchableOpacity
        onPress={() => handleProduct(item)}
        style={style.FlatListImgContainer}>
        <Image source={{uri: item.image}} style={style.FlatListImg} />
        <View style={style.content}>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.detail}>{item.detail}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}>
        <View style={style.priceView}>
          <Text style={style.price}>₹ {item.price}</Text>
          <View style={style.offView}>
            <Text style={style.offTxt}>20%</Text>
          </View>
        </View>
        <View style={style.qunView}>
          <TouchableOpacity
            onPress={() => {
              setQty(qty <= 0 ? qty : qty - 1);
              // addToCart(item)
            }}>
            <Text style={style.txt1}>-</Text>
          </TouchableOpacity>

          <Text style={style.txt2}>{qty}</Text>

          <TouchableOpacity
            onPress={() => {
              setQty(qty + 1);
              addToCart(item);
            }}>
            <Text style={style.txt1}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OfferProducts;
