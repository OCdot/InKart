import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'

const CommonSectionHeader = props => {
  const navigation =useNavigation()
  const handlenNavigation = () =>{
    navigation.navigate('Shop' ,{type: 'all'})
  }
  return (
    <View style={style.innerContainer}>
        <View>
          <Text style={style.t1}>{props.head}</Text>
          <Text style={style.t2}>{props.content} </Text>
        </View>
        <Text style={style.t3} onPress={handlenNavigation}>{props.rightTxt}</Text>
      </View>
  )
}

export default CommonSectionHeader