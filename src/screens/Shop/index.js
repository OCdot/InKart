import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import UseOrientation from '../../components/common/orientation';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import CustomSearch from '../../components/CustomSearch';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import CommonEmpty from '../../components/CommonEmpty';
import ProductDetails from '../ProductDetails';

const Shop = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const navigation = useNavigation();
  const {updatecategory} = useSelector(state => state);

  const route = useRoute();
  const {type} = route.params;
  // console.warn(type);

  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    if (type === 'all') {
      setSelectedCategory('Shop');
    }
  }, [type]);

  useEffect(() => {
    // console.warn( 'CATEGORY',updatecategory);
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight cart={true} />,
      title: selectedCategory,
    });
  }, [selectedCategory]);

  const handleRenderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategories(item)}
        style={responsiveStyle.catView}>
        <Text style={responsiveStyle.catViewTxt}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const handleCategories = async item => {
    // console.warn(item.category);
    setSelectedCategory(item.category);
    await firestore()
      .collection('Product').where('categoryId','==',item.id)
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

          setProducts(result.length> 0 ? result : []);
        }else{
          setProducts([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

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
              const responseData = {id : doc.id, ...doc?.data()}
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
  // console.warn(products);

  const handleProduct = item => {
    // console.warn(item);
    navigation.navigate('ProductDetails',{product : item})
  }

  const handleProductRender = ({item, index}) => {
    return (
      <View style={responsiveStyle.FlatListContainer}>
        <TouchableOpacity onPress={() => handleProduct(item)} style={responsiveStyle.FlatListImgContainer}>
          <Image
            source={{uri : item.image}}
            style={responsiveStyle.FlatListImg}
          />
          <View style={responsiveStyle.content}>
            <Text style={responsiveStyle.name}>{item.name}</Text>
            <Text style={responsiveStyle.detail}>{item.detail}</Text>
          </View>
        </TouchableOpacity>

        <View style={responsiveStyle.priceView}>
          <Text style={responsiveStyle.price}>₹ {item.price}/-</Text>

          <View style={responsiveStyle.offView}>
            <Text style={responsiveStyle.offTxt}>XX%</Text>
          </View>
          <View style={responsiveStyle.qunView}>
            <Text style={responsiveStyle.txt1}>-</Text>
            <Text style={responsiveStyle.txt2}>0</Text>
            <Text style={responsiveStyle.txt1}>+</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      <FlatList
        horizontal
        style={responsiveStyle.categories}
        data={updatecategory}
        showsHorizontalScrollIndicator={false}
        renderItem={handleRenderItems}
      />
      <CustomSearch filter={true} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={handleProductRender}
        ListEmptyComponent={<CommonEmpty title ='No Products Available'/>}
      />
    </View>
  );
};
export default Shop;
