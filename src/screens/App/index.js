import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Login from '../Login';
import SignUp from '../SignUp';
import LoginPhone from '../LoginPhone';
import Home from '../Home';
import {DimensionContextProvider} from '../../context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Categories from '../Categories';
import { enableLatestRenderer } from 'react-native-maps';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../Cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFooter from '../../components/CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import Orders from '../Orders';
import Wishlist from '../Wishlist';
import Account from '../Account';
import style from './style';
import {Provider, useSelector} from 'react-redux';
import {store} from '../../storage/store';
import Splash from '../Splash';
import Shop from '../Shop';
import ProductDetails from '../ProductDetails';
import Review from '../Review';
import AddAddress from '../AddAddress';
import OrderDetails from '../OrderDetails';

const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Footer = createBottomTabNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MyFooter"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown : true,
        headerTitleStyle: style.title,
      }}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="MyFooter"
        component={AppFooter}
      />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Shop" component={Shop} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="Review" component={Review} />
      <Drawer.Screen name="AddAddress" component={AddAddress} />
      <Drawer.Screen name='OrderDetails' component={OrderDetails}/>
    </Drawer.Navigator>
  );
};

const AppFooter = () => {
  return (
    <Footer.Navigator
      tabBar={props => <CustomFooter {...props} />}
      screenOptions={{
        // headerShown : true,
        headerTitleStyle: {fontFamily: 'Poppins-Bold', fontSize: 20},
      }}>
      <Footer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Footer.Screen name="Categories" component={Categories} />

      <Footer.Screen name="Search" component={Search} />
      <Footer.Screen name="Offers" component={Offers} />
      <Footer.Screen name="Cart" component={Cart} />
    </Footer.Navigator>
  );
};

const AppNavigation = () => {
  const [loading, setLoading] = useState(true);
  const {isLoggedIn} = useSelector(state => state);
  // console.warn(isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, [isLoggedIn]);

  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          {loading ? (
            <AppStack.Screen name="Splash" component={Splash} />
          ) : (
            <>
              {isLoggedIn ? (
                <AppStack.Screen name="MyDrawer" component={AppDrawer} />
              ) : (
                <>
                  <AppStack.Screen name="Login" component={Login} />
                  <AppStack.Screen name="SignUp" component={SignUp} />
                  <AppStack.Screen name="LoginPhone" component={LoginPhone} />
                </>
              )}
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
};

const App = () => {
  useEffect(() => {
    enableLatestRenderer()
  },[])
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
