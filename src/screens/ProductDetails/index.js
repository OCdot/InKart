import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import UseOrientation from '../../components/common/orientation';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useRef} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating-widget';
import colors from '../../components/common/colors';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import MoreInfo from './components/MoreInfo';
import Extrainfo from './components/ExtraInfo';
import ProductReview from './components/ProductReview';
import DeliveryInfo from './components/DeliveryInfo';
import ProductScroll from '../../components/ProductScroll';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useScrollToTop} from '@react-navigation/native';
import {updateCartCount, updateWishIds} from '../../storage/action';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';

const ProductDetails = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const route = useRoute();
  // console.warn('product deatils',route.name);
  const {product} = route.params;
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [rating, setRating] = useState(0);
  const wishIds = useSelector(state => state.wishIds);

  useEffect(() => {
    // console.warn( 'CATEGORY',updatecategory);
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => (
        <CommonHeaderRight
          cart={true}
          share={true}
          product={{product: product}}
        />
      ),
      title: '',
    });
  }, []);

  const [productDetailsObj, setProductDetails] = useState(product);

  useEffect(() => {
    setProductDetails(product);
  }, [product]);

  const navigationNeeded = (val, item) => {
    if (val) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
      setProductDetails(item);
    }
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

  const [qty, setQty] = useState(1);

  const handleQty = type => {
    if (type === 'plus') {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        return qty;
      } else {
        setQty(qty - 1);
      }
    }
  };
  const {userId, cartCount} = useSelector(state => state);
  const dispatch = useDispatch();
  const handelAddToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', productDetailsObj.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore().collection('Cart').add({
            created: Date.now(),
            detail: productDetailsObj.detail,
            name: productDetailsObj.name,
            price: productDetailsObj.price,
            qty: qty,
            userId: userId,
            productId: productDetailsObj.id,
            image: productDetailsObj.image,
          });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              qty: parseInt(snapshot?.docs[0].data().qty) + qty,
            });
        }
      });
  };

  return (
    <View>
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => addToWishlist(productDetailsObj)}
          style={responsiveStyle.heart}>
          {wishIds.includes(productDetailsObj.id) ? (
            <AntDesign name="heart" size={30} color={colors.danger} />
          ) : (
            <AntDesign name="hearto" size={30} color={colors.danger} />
          )}
        </TouchableOpacity>
        <Image
          style={responsiveStyle.product}
          source={{uri: productDetailsObj?.image}}
        />
        <View style={responsiveStyle.contentContainer}>
          <Text style={responsiveStyle.contentHead}>
            {productDetailsObj?.name}
          </Text>

          <View style={responsiveStyle.rattingContainer}>
            <StarRating rating={rating} onChange={setRating} />
            <Text style={responsiveStyle.ratting}>(1 Ratting)</Text>
          </View>

          <View style={responsiveStyle.rattingContainer}>
            <Text style={responsiveStyle.contentPrice}>
              {' '}
              ₹ {productDetailsObj.price}
            </Text>
            <Text style={responsiveStyle.offTxt}>25% Off</Text>
          </View>

          <MoreInfo />

          <View style={responsiveStyle.proBottomContainer}>
            <Text style={responsiveStyle.detailHead}>Product Details</Text>
            <Text style={responsiveStyle.contentDetail}>
              {productDetailsObj.detail}
            </Text>
          </View>

          <Extrainfo />

          <ProductReview product={product} />
          <DeliveryInfo />

          <View style={{marginLeft: widthPercentageToDP('-5%')}}>
            <ProductScroll isNavigationNeeded={navigationNeeded} />
          </View>
        </View>
      </ScrollView>

      <View style={responsiveStyle.fixedButton}>
        <View style={responsiveStyle.innerButton}>
          <TouchableOpacity onPress={() => handleQty('minus')}>
            <AntDesign name="minus" size={16} color={colors.primaryGreen} />
          </TouchableOpacity>

          <Text style={responsiveStyle.qty}>{qty}</Text>

          <TouchableOpacity onPress={() => handleQty('plus')}>
            <AntDesign name="plus" size={16} color={colors.primaryGreen} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handelAddToCart}>
          <Text style={responsiveStyle.btnTxt}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductDetails;
