import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import style from './style'
import UseOrientation from '../common/orientation'

export default function CommonButton(props) {
    const orientation = UseOrientation();
   const responsiveStyle = style(orientation.orientation)
  return (
    <TouchableOpacity onPress={props.onButtonPress} style = {responsiveStyle.container}>
      <Text style = {responsiveStyle.txt}>{props.buttonTxt}</Text>
    </TouchableOpacity>
  )
}