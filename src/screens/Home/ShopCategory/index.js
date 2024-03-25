import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import colors from '../../../components/common/colors';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../storage/action';
import { useNavigation } from '@react-navigation/native';

const ShopCategory = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  const navigation = useNavigation()

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await firestore()
      .collection('Categories')
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const responseData = {id : doc.id, ...doc?.data()}
              result.push(responseData);
            }
          });

          setCategories(result);
          dispatch(updateCategory(result))

        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleCategories = (index) =>{
    navigation.navigate('Categories' , {catIndex : index})
  }

  return (
    <View style={style.container}>
      <Text style={style.headTxt}>Shop By Category</Text>

      <FlatList
        data={categories}
        numColumns={4}
        contentContainerStyle={style.flatlist}
        keyExtractor={(item,index) => String(index)}
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
            <TouchableOpacity onPress={()=> handleCategories(index)} style={style.flatlistView}>
              <View style={[style.imgView, {backgroundColor: categoriesColor}]}>
                <Image source={{uri: item.image}} style={style.flatlistImg} />
              </View>
              <Text style={style.itemTxt}>{item.category}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default ShopCategory;
