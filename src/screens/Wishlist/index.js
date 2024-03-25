import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import UseOrientation from '../../components/common/orientation';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';
import CommonHeaderRight from '../../components/CommonHeaderRight';

const Wishlist = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const navigation = useNavigation();
  const {userId, cartCount} = useSelector(state => state);
  const [wishItems, setWishItems] = useState([]);
  const dispatch = useDispatch();

  const getWishlist = async () => {
    // console.warn('USER',userId);
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {
        // console.warn('SNAP',snapShot);
        if (snapShot.empty) {
          setWishItems([]);
        } else {
          const objArray = [];
          snapShot?.docs.forEach(document => {
            const result = {id: document.id, ...document?.data()};
            objArray.push(result);
          });
          setWishItems(objArray);
          // console.warn('Items',wishItems);
        }
      });
  };

  const isFocused = useIsFocused()
  useEffect(() => {
   if(isFocused){
    getWishlist();
   }
  }, [isFocused])
  

  useEffect(() => {
    
    navigation.setOptions({
      headerRight: () => <CommonHeaderRight cart={true} />,
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const removeItem = async itemToRemove => {
    await firestore()
      .collection('Wishlist')
      .doc(itemToRemove.id)
      .delete()
      .then(() => {
        const filteredWishlist = wishItems.filter(
          ele => ele.id !== itemToRemove.id,
        );
        setWishItems(filteredWishlist);
      });
  };

  const addToCart = async itemToAdd => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', itemToAdd.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            detail: itemToAdd.detail,
            name: itemToAdd.name,
            price: itemToAdd.price,
            qty: 1,
            userId: userId,
            productId: itemToAdd.id,
            image: itemToAdd.image,
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
    <SafeAreaView style={responsiveStyle.container}>
      <FlatList
        data={wishItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        ListEmptyComponent={() => {
          return (
            <View style={responsiveStyle.emptyContainer}>
              <Text style={responsiveStyle.emptyTxt}>
                Your Wishllist is Empty ....!{' '}
              </Text>
              <TouchableOpacity
                style={responsiveStyle.homeBtn}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text style={responsiveStyle.homeBtnTxt}>Go To Home</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          // console.warn(item);
          return (
            <View style={responsiveStyle.productView}>
              <Image
                style={responsiveStyle.productImg}
                source={{uri: item.image}}
              />

              <View style={responsiveStyle.secondView}>
                <Text numberOfLines={2} style={responsiveStyle.title}>
                  {item.name}
                </Text>
                <Text numberOfLines={2} style={responsiveStyle.desc}>
                  {item.detail}
                </Text>
                <View style={responsiveStyle.bottomView}>
                  <Text style={responsiveStyle.price}>₹ {item.price}</Text>

                  <TouchableOpacity
                    onPress={() => {
                      addToCart(item);
                    }}
                    style={responsiveStyle.cartView}>
                    <Text style={responsiveStyle.cartTxt}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => removeItem(item)}
                style={responsiveStyle.deleteView}>
                <Image
                  style={responsiveStyle.delete}
                  source={require('../../assets/images/minus.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Wishlist;
