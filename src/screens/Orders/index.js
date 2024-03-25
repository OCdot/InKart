import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import style from './style';
import UseOrientation from '../../components/common/orientation';
import CustomSearch from '../../components/CustomSearch';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';

const Orders = () => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const [ordersArray, setOrdersArray] = useState([]);
  const userId = useSelector(state => state.userId);
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  useEffect(() => {
    if(isFocused){
      getOrders()
    }

  }, [isFocused])
  

  useEffect(() => {
    // console.warn("Sample");
    getOrders();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const getOrders = async () => {
    // console.warn('ok');
    // console.warn(userId);
    await firestore()
      .collection('Orders')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {
        if (snapShot.empty) {
          setOrdersArray([]);
        } else {
          const objArray = [];
          snapShot?.docs?.forEach(document => {
            if (document.exists) {
              const result = {id: document.id, ...document.data()};
              objArray.push(result);
            }
            setOrdersArray(objArray);
          });
        }
      });
  };

  const handleSearch = async text => {
    await firestore()
      .collection('Orders')
      .where('userId', '==', userId).orderBy('orderId')
      .startAt(String(text))
      .endAt(String(text) + '\uf8ff')
      .get()
      .then(snapShot =>{
        if(snapShot.empty){
          setOrdersArray([])
        }else{
          const objArray =[]
          snapShot?.docs?.forEach(document =>{
            if(document.exists){
              const result ={id : document.id, ...document.data()}
              objArray.push(result)
            }
            setOrdersArray(objArray)
          })
        }
      });
  };

  const navigateToDetails = (item) =>{
    navigation.navigate('OrderDetails',{item : item})
  }

  return (
    <View style={responsiveStyle.container}>
      <CustomSearch filter={true} 
      onChangeText = {handleSearch}/>
      <ScrollView style={responsiveStyle.container}>
        <FlatList
          data={ordersArray}
          extraData={ordersArray}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          ListEmptyComponent={() => {
            return (
              <View style={responsiveStyle.emptyContainer}>
                <Text style={responsiveStyle.emptyTxt}>
                  No Orders Placed ....!
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
            return (
              <View style={responsiveStyle.orderContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(item)} style={responsiveStyle.orderInnerContainer}>
                  <View>
                    <Text style={responsiveStyle.idTxt}>
                      ID : {item.orderId}
                    </Text>
                    <Text style={responsiveStyle.orderOn}>
                      Ordered On: {item.created}
                    </Text>
                    <Text style={responsiveStyle.address}>{item.address}</Text>
                    <Text>{item.add2}</Text>
                    <Text style={responsiveStyle.idTxtNormal}>
                      Paid:
                      <Text style={responsiveStyle.price}>
                        {item.totalAmount}
                      </Text>
                      ,Items:{' '}
                      <Text style={responsiveStyle.price}>
                        {item.cartItems.length}
                      </Text>
                    </Text>
                  </View>
                  <Image
                    style={responsiveStyle.map}
                    source={require('../../assets/images/map.jpeg')}
                  />
                </TouchableOpacity>
                <View style={responsiveStyle.orderBottom}>
                  <Text style={responsiveStyle.idTxt}>Order Shipped</Text>
                  <Text style={responsiveStyle.idTxt}>
                    Rate & Review Products
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Orders;
