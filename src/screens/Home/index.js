import React, {useEffect, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Image, ScrollView, Text, View} from 'react-native';
import style from './style';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import Banner from '../../components/Banner';
import RecentBought from './RecentBought';
import ShopCategory from './ShopCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';
import {useDispatch, useSelector} from 'react-redux';
import {updateWishIds} from '../../storage/action';
import { useIsFocused } from '@react-navigation/native';

const Home = () => {
  const userId = useSelector(state => state.userId);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const isFocused = useIsFocused()

  useEffect(() => {
    if(isFocused){
      scrollRef.current.scrollTo({y : 0 , animated :true})
    }
    
  }, [isFocused])
  

  useEffect(() => {
    getWishlistIds();
  }, []);

  const getWishlistIds = async () => {
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {
        // console.warn('SNAP',snapShot);
        if (snapShot.empty) {
          // setWishItems([]);
          dispatch(updateWishIds([]));
        } else {
          const idArray = [];
          snapShot?.docs.forEach(document => {
            idArray.push(document?.data().productId);
          });
          dispatch(updateWishIds(idArray));
        }
      });
  };

  return (
    <View style={style.main}>
      <CommonHeader />
      <ScrollView
        ref={scrollRef}
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Banner />
        <RecentBought />
        <ShopCategory />
        <ProductScroll />
        <OfferProducts />
      </ScrollView>
    </View>
  );
};
export default Home;
