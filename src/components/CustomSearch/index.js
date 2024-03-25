import React from 'react';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import style from './style';
import colors from '../common/colors';
import UseOrientation from '../common/orientation';

const CustomSearch = props => {
  const orientation = UseOrientation();
  const {filter,onChangeText ={}} = {...props};
  const responsiveStyle = style(orientation.orientation, filter);
  // console.warn(orientation);

  return (
    <View style={[responsiveStyle.container,]}>
      <View style={responsiveStyle.search}>
        {/* <View style={responsiveStyle.innerContainer}> */}
          <Image
            source={require('../../assets/images/loupe.png')}
            style={responsiveStyle.icon}
          />

          <TextInput
            numberOfLines={1}
            placeholder="Search Here..."
            placeholderTextColor={colors.black_lvl_2}
            style={responsiveStyle.textInput}
            selectionColor={colors.primaryGreen}
            onChangeText={text => onChangeText(text)}
          />
          <Image
          source={require('../../assets/images/mic.png')}
          style={responsiveStyle.icon}
        />
        {/* </View> */}
        
      </View>
      {filter ? (
        <View style = {responsiveStyle.filterTxtView}>
          <Text style={responsiveStyle.filterTxt}>Filter</Text>
        </View>
      ) : null}
    </View>
  );
};
export default CustomSearch;
