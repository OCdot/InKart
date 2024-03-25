import {Image, ScrollView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../../../components/common/colors';
import { useSelector } from 'react-redux';

const Trending = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  // const getCategories = async () => {
  //   await firestore()
  //     .collection('Categories')
  //     .get()
  //     .then(snapshot => {
  //       if (!snapshot.empty) {
  //         const result = [];
  //         snapshot.docs.forEach(doc => {
  //           if (doc.exists) {
  //             result.push(doc.data());
  //           }
  //         });

  //         setCategories(result);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const updatecategory =useSelector(state => state)
  // console.warn(updatecategory.updatecategory);
  return (
    <View style={style.main}>
      <Text style={style.trendHead}>Trending Offers</Text>
      <FlatList
        data={updatecategory.updatecategory}
        horizontal={true}
        contentContainerStyle={style.flatlist}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const categoriesColor =
            index % 4 === 0
              ? colors.category_1
              : index % 4 === 1
              ? colors.category_2
              : index % 4 === 2
              ? colors.category_3
              : index % 4 === 3
              ? colors.category_4
              : colors.category_1;
          return (
            
              <View
              
                style={[
                  style.imgContainer,
                  {backgroundColor: categoriesColor},
                ]}>
                <Image style={style.image} source={{uri: item.image}} />
              </View>
           
          );
        }}
      />
    </View>
  );
};
export default Trending;
