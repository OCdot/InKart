import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';

const Banner = () => {

  const [bannerItems, setBannerItems] = useState([])

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    // console.warn('OK');
    await firestore()
      .collection('Banners')
      .get()
      .then(snapshot => {
        
        if (!snapshot.empty) {
          const result = [];
          snapshot.docs.forEach(doc => {
            if(doc.exists){
              result.push(doc.data());
            }
        });
          setBannerItems(result)
        }
      }).catch(err =>{
        console.log(err)
      });
  };


  return (
    <View>
      <FlatList
        data={bannerItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item,index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <View style={{padding: 5}}>
              <ImageBackground source={{uri : item.image}} style={style.flastListImage}>
                <View style={style.innerView}>
                  <Text style={style.flatListHead}>{item.head}</Text>
                  <Text style={style.flatLiistContent}>{item.content}</Text>
                  <TouchableOpacity style={style.touch}>
                    <Text style={style.touchTxt}>Shop Now</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Banner;
