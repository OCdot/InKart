import React from 'react';
import { SafeAreaView, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
const CommonHeader = () => {
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  
    
 
 
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          style={style.sideicon}
          source={require('../../assets/images/app-drawer.png')}
        />
      </TouchableOpacity>
      <Image
        style={style.logo}
        source={require('../../assets/images/logo-removebg-preview.png')}
      />
    </SafeAreaView>
  );
};
export default CommonHeader;
