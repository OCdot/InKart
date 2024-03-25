import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import style from './style';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import colors from '../../components/common/colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import UseOrientation from '../../components/common/orientation';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';




const Offers = () => {
  // const orientation = UseOrientation();
  
  const offersArray = [
    {
      id: '0',
      offer: '41',
      head: 'Midnight Sale..!',
      content: ' For All The Purchases above Rs.900',
      code: 'YTKOLP',
    },
    {
      id: '1',
      offer: '47',
      head: 'Monsoon Sale..!',
      content: ' For All The Purchases above Rs.1900',
      code: 'YTKKLP',
    },
    {
      id: '2',
      offer: '45',
      head: 'Onam Sale..!',
      content: ' For All The Purchases above Rs.2900',
      code: 'YTKOHP',
    },
    {
      id: '3',
      offer: '51',
      head: 'X-Mas Sale..!',
      content: ' For All The Purchases above Rs.9900',
      code: 'ZTKOLP',
    },
  ];

  const navigation =useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />
    });
  }, []);

  return (
    <View style={style.main}>
      <ScrollView style={style.container}>
        <CustomSearch />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offersArray}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <View style={{alignSelf: 'center', marginVertical: 15}}>
                <View
                  style={style.renderView}>
                  {/* 4 Circle */}
                  <View style={style.offView}>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                  </View>

                  <View style={style.rectangle1}>
                    {/* OFFER TEXT */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 20,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Bold',
                          color: colors.primaryGreen,
                          fontSize: responsiveFontSize(3),
                          marginRight: 5,
                          marginLeft: 25,
                        }}>
                        {item.offer}
                      </Text>
                      <View style={{marginRight: 15}}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            color: colors.primaryGreen,
                            fontSize: responsiveFontSize(1.5),
                          }}>
                          %
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            color: colors.primaryGreen,
                            fontSize: responsiveFontSize(1.5),
                            marginTop: -10,
                          }}>
                          Off
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Bold',
                            color: colors.black,
                            fontSize: responsiveFontSize(2),
                          }}>
                          {item.head}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Regular',
                            color: colors.black,
                            fontSize: responsiveFontSize(1.5),
                          }}>
                          {item.content}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: 100,
                      backgroundColor: colors.secondaryGreen,
                    }}>
                    <View style={style.innerCircle1}></View>
                    <View style={style.innerCircle2}></View>
                  </View>
                  <View style={style.rectangle2}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: colors.black,
                        fontSize: responsiveFontSize(1.5),
                        marginLeft: -9,
                      }}>
                      Use Code
                    </Text>
                    <View
                      style={{
                        padding: 5,
                        borderRadius: 15,
                        backgroundColor: colors.primaryGreen,
                        marginRight: 5,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: -9,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: colors.white,
                          fontSize: responsiveFontSize(1.5),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {item.code}
                      </Text>
                    </View>
                  </View>

                  {/* 4 Circle */}
                  <View style={{marginLeft: -25 / 2}}>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                    <View style={style.circle}></View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Offers;
