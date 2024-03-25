import {Image, ScrollView, Text, View} from 'react-native';
import UseOrientation from '../../components/common/orientation';
import style from './style';
import {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import ActionSheet from 'react-native-actions-sheet';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import colors from '../../components/common/colors';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomeButton';

const Review = () => {
  const navigation = useNavigation();
  const orientation = UseOrientation();
  const responsiveStyle = style(orientation.orientation);
  const [rating, setRating] = useState(3.5);
  const [reviewRatting,setReviewRatting] = useState(0)

  const actionSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => (
        <CommonHeaderRight plus={true} handlePlusIcon={openActionSheet} />
      ),
      title: 'Reviews',
    });
  }, []);
  const openActionSheet = () => {
    actionSheetRef.current.show();
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>

      <View style={responsiveStyle.reviewInnerContainer}>
        <View style={responsiveStyle.userContainer}>
          <Image
            style={responsiveStyle.userImg}
            source={require('../../assets/images/hacker.png')}
          />
          <View>
            <Text style={responsiveStyle.userName}>OC</Text>
            <StarRating starSize={20} rating={rating} onChange={setRating} />
          </View>
        </View>
        <Text style={[responsiveStyle.reviewTxt, {color: colors.white}]}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </Text>
      </View>

      <ActionSheet ref={actionSheetRef}>
        <View style ={responsiveStyle.actionSheetContainer}>
          <Text style= {responsiveStyle.actionSheetHead}>Write a Review</Text>
          <StarRating starSize={35} rating={reviewRatting} onChange={setReviewRatting} />
          <CustomTextInput placeholder = 'Write Here..' multiline ={true} />
          <CustomButton type ='primary' buttonText = 'Submit'/>
        </View>
      </ActionSheet>
    </ScrollView>
  );
};
export default Review;
