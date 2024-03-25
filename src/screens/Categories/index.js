import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';

import style from './style';
// import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../components/common/colors';
import CustomFooter from '../../components/CustomFooter';
import { useNavigation, useRoute } from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useSelector } from 'react-redux';

const Categories = () => {
  // const [initial, setInitial] = useState(
  //   Orientation.getInitialOrientation(),
  // );
  const navigation = useNavigation()
  const updatecategory = useSelector(state => state)
  const [products, setProducts] = useState([]);
  const route = useRoute()
  const [active, setActive] = useState(0);

  useEffect(() => {
    getProducts();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft/>
    });
  }, []);

  const {catIndex =0} = route?.params ?? {}
  useEffect(() => {
    setActive(catIndex)
  },[catIndex])

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

          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleToCategoryTouch = index => {
    setActive(index);
  };

  // console.warn(initial);
  return (
    <View style={style.main}>
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <View style={style.rowStyle}>
          <View>
            <FlatList
              data={updatecategory.updatecategory}
              contentContainerStyle={style.flatlistContainer}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                
                return (
                  <TouchableOpacity
                    style={[
                      style.categotyTouch,
                      {
                        backgroundColor:
                          index === active ? colors.white : 'transparent',
                      },
                    ]}
                    onPress={() => handleToCategoryTouch(index)}>
                    <Image
                      source={{uri: item.image}}
                      style={style.categoryImg}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            
            <ImageBackground
              style={style.backgroundImg}
              source={require('../../assets/images/shopping.jpeg')}>
              <Text numberOfLines={1} style={style.catHead}>
                {updatecategory.updatecategory[active]?.category}
              </Text>
              <Text numberOfLines={3} style={style.catDesc}>
                {updatecategory.updatecategory[active]?.description}
              </Text>
            </ImageBackground>
            <FlatList
              data={products}
              numColumns={3}
              contentContainerStyle={style.proStyle}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={style.proCondainer}>
                    <View style = {style.imgBg}>
                      <Image source={{uri: item.image}} style={style.proImg} />
                    </View>
                    <Text style = {style.proHead}>{item.name}</Text>
                    <Text style = {style.proDesc}>{item.price}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>

      </ScrollView>
      
    </View>
  );
};
export default Categories;
