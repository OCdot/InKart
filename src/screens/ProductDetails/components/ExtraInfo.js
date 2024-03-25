import {Text, View} from 'react-native';
import UseOrientation from '../../../components/common/orientation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Accordion from 'react-native-collapsible/Accordion';
import style from './style';
import colors from '../../../components/common/colors';
import { useState } from 'react';

const Extrainfo = props => {
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);

  const DetailsArray = [
    {
      title: 'Manufacture Details',
      content: 'Dummy Content.... Dummy Content.... ',
    },
    {
      title: 'Disclaimer',
      content: 'Dummy Content.... Dummy Content.... ',
    },
    {
      title: 'Features & Details',
      content: 'Dummy Content.... Dummy Content.... ',
    },
  ];

  const [curretSection, setCurretSection] = useState([0])

  const _renderHeader = (section) => {
    // console.warn(section);
    return(
      <View style = {responsiveStyle.extraInfoContainer}>
          <Text style ={responsiveStyle.title}>{section.title}</Text>
          <AntDesign name="down" size={20} color={colors.grey} />
      </View>
    )
  }
  const _renderContent = (section) => {
    return(
      <View>
        <Text style ={responsiveStyle.listTxt}>{section.content}</Text>
      </View>
    )
  }
  const _updateSections = (activeSecrions) => {
    setCurretSection(activeSecrions)
  }

  return (
    <View>
      <Accordion
        activeSections={curretSection}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor='transparent'
        sectionContainerStyle = {responsiveStyle.sectionContainer}
      />
    </View>
  );
};
export default Extrainfo;
