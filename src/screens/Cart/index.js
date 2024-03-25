import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import UseOrientation from '../../components/common/orientation';
import colors from '../../components/common/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import OrderTotal from './OrderTotal';
import CommonButton from '../../components/CommonButton';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';
import Snackbar from 'react-native-snackbar';

const Cart = () => {
  const orientation = UseOrientation();
  const {userId, cartCount, email, mobile} = useSelector(state => state);
  const resStyle = style(orientation.orientation);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(0);
  const navigation = useNavigation();
  const [cartProducts, setCartProducts] = useState([]);
  
  const isFocused =useIsFocused()

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  useEffect(() => {
    if (isFocused) {
      getCartProducts();
    }
  }, [isFocused])
  
  useEffect(() => {
    if (cartProducts.length > 0) {
      setCharges(100);
    } else {
      setCharges(0);
    }
  }, [cartProducts]);

  // console.warn(userId);
  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          const result = [];
          let totalAmount = 0;
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              // console.warn(doc.data().price);
              const amount =
                parseFloat(doc?.data().price) * parseInt(doc?.data().qty);
              // console.warn(amount);
              totalAmount = totalAmount + amount;
              // console.warn(totalAmount);
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setTotal(totalAmount);
          // console.warn('total',total);
          setCartProducts(result);
        }else{
          setCartProducts([])
          setTotal(0)
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  // console.warn(cartProducts);
  const dispatch = useDispatch();

  const updateArray = productInfo => {
    const result = cartProducts.filter(x => {
      return x.id !== productInfo.id;
    });
    setTotal(total - parseFloat(productInfo.price));
    setCartProducts(result);
    dispatch(updateCartCount(cartCount - 1));
  };

  const handleTotal = (type, productInfo) => {
    if (type === 'add') {
      setTotal(total + parseFloat(productInfo.price));
    } else {
      setTotal(total - parseFloat(productInfo.price));
    }
  };
  const onButtonPress = () => {
    if (cartProducts.length > 0) {
      if (email === '' || mobile === '') {
        Snackbar.show({
          text: 'Complete your Profile Registration..!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.danger,
          textColor: colors.white,
        });
        navigation.navigate('Account');
      } else {
        navigation.navigate('AddAddress', {
          cartProducts: cartProducts,
          total: parseFloat(total + charges).toFixed(2),
        });
      }
    } else {
      Snackbar.show({
        text: 'Cart Empty..!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.danger,
        textColor: colors.white,
      });
    }
  };

  return (
    <ScrollView style={resStyle.container}>
      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={cartProducts}
        extraData={cartProducts}
        renderItem={({item, index}) => (
          <RenderItem
            item={item}
            index={index}
            updateArray={updateArray}
            handleTotal={handleTotal}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <View style={resStyle.emptyContainer}>
              <Text style={resStyle.emptyTxt}>Cart is Empty...!</Text>
              <TouchableOpacity>
                <Text>Go To Shop</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={{alignSelf: 'center', marginVertical: 15}}>
        <View style={resStyle.renderView}>
          {/* 4 Circle */}
          <View style={resStyle.offView}>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
          </View>

          <View style={resStyle.rectangle1}>
            {/* OFFER TEXT */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  color: colors.primaryGreen,
                  fontSize: responsiveFontSize(3),
                  marginRight: 5,
                  marginLeft: 25,
                }}>
                51
              </Text>
              <View style={{marginRight: 15}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: colors.primaryGreen,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  %
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: colors.primaryGreen,
                    fontSize: responsiveFontSize(1.5),
                    marginTop: -10,
                  }}>
                  Off
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    color: colors.black,
                    fontSize: responsiveFontSize(2),
                  }}>
                  Bumper Offer
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Mega Sale....!
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              height: 100,
              backgroundColor: colors.secondaryGreen,
            }}>
            <View style={resStyle.innerCircle1}></View>
            <View style={resStyle.innerCircle2}></View>
          </View>
          <View style={resStyle.rectangle2}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: colors.black,
                fontSize: responsiveFontSize(1.5),
                marginLeft: -9,
              }}>
              Use Code
            </Text>
            <View
              style={{
                padding: 5,
                borderRadius: 15,
                backgroundColor: colors.primaryGreen,
                marginRight: 5,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: -9,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: colors.white,
                  fontSize: responsiveFontSize(1.5),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                7ZKPL
              </Text>
            </View>
          </View>

          {/* 4 Circle */}
          <View style={{marginLeft: -25 / 2}}>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
            <View style={resStyle.circle}></View>
          </View>
        </View>
      </View>

      <OrderTotal total={total} charges={charges} />

      <CommonButton
        buttonTxt="Proceed To Checkout"
        onButtonPress={onButtonPress}
      />
    </ScrollView>
  );
};

const RenderItem = ({item, index, updateArray, handleTotal}) => {
  const [qty, setQty] = useState(item.qty);
  // console.warn(item);
  const orientation = UseOrientation();
  const {userId} = useSelector(state => state);
  const resStyle = style(orientation.orientation);

  useEffect(() => {
    setQty(item.qty);
  }, [item]);

  const addToCart = async item => {
    // console.warn('Cart' , item);
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
      .get()
      .then(snapshot => {
        firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
            qty: parseInt(snapshot?.docs[0].data().qty) + 1,
          });
        handleTotal('add', item);
      });
  };

  const removeItem = async () => {
    if (qty <= 1) {
      await firestore()
        .collection('Cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item);
        });
    } else {
      setQty(qty - 1);
      firestore()
        .collection('Cart')
        .doc(item.id)
        .update({
          qty: parseInt(qty, 10) - 1,
        });
      handleTotal('minus', item);
    }
  };
  // console.warn(item);
  const navigation = useNavigation();
  const redirectToProductDetails = () => {
    navigation.navigate('ProductDetails', {product: item});
  };
  return (
    <View style={resStyle.FlatListContainer}>
      <TouchableOpacity
        onPress={redirectToProductDetails}
        style={resStyle.FlatListImgContainer}>
        <Image source={{uri: item.image}} style={resStyle.FlatListImg} />
        <View style={resStyle.content}>
          <Text style={resStyle.name}>{item.name}</Text>
          <Text style={resStyle.detail}>{item.detail}</Text>
        </View>
      </TouchableOpacity>
      <View style={resStyle.priceView}>
        <Text style={resStyle.price}>₹ {item.price}</Text>

        <View style={resStyle.offView}>
          <Text style={resStyle.offTxt}>XX%</Text>
        </View>

        <View style={resStyle.qunView}>
          <TouchableOpacity onPress={removeItem}>
            <Text style={resStyle.txt1}>-</Text>
          </TouchableOpacity>
          <Text style={resStyle.txt2}>{qty}</Text>
          <TouchableOpacity
            onPress={() => {
              setQty(qty + 1);
              addToCart(item);
            }}>
            <Text style={resStyle.txt1}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Cart;
