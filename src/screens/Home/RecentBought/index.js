import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const RecentBought = () => {
  const navigation = useNavigation()

  const [recentItems, setRecentItems] = useState([]);
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
              result.push(doc.data());
            }
          });

          setRecentItems(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

 const handleProduct = (item) => {
  navigation.navigate('ProductDetails', {product : item})
 }
  
  return (
    <View style = {style.container}>
      <Text style = {style.headTxt}>Recently Bought</Text>
      <FlatList
      showsHorizontalScrollIndicator={false}
        data={recentItems}
        horizontal
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => handleProduct(item)} style = {style.contentView}> 
              <Image source={{uri :item.image}} style={style.flastListImage} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default RecentBought;
