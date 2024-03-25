import {Image, ScrollView, Text, View, SafeAreaView} from 'react-native';
import style from './style';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import OfferProducts from '../../components/OfferProducts';
import Trending from './components/Trending';
import { useEffect } from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation =useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />
    });
  }, []);
  return (
    <View style = {style.main}>
      <CustomSearch />
      <ScrollView style={style.container}>
        
        <Trending/>
        <OfferProducts/>
      </ScrollView>
    </View>
  );
};
export default Search;
