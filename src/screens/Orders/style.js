import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const style = orientation => StyleSheet.create({
  emptyContainer :{
    padding : 15,
    justifyContent: 'center',
    alignItems  : 'center',
  },
  emptyTxt : {
    fontFamily : 'Poppins-Regular',
    fontSize: 25,
    color: colors.danger,
  },
  homeBtn : {
    padding:5
  },
  homeBtnTxt : {
    fontFamily : 'Poppins-Regular',
    fontSize : 20,
    color : colors.primaryGreen
  },
  container: {
    flex: 1,
    backgroundColor : colors.white_lvl_3,
    // padding : 10,
  },
  orderContainer : {
    backgroundColor : colors.secondaryGreen,
    padding  : 15,
    borderRadius : 15,
    marginLeft : 10,
    marginRight :10,
    overflow : 'hidden',
    marginVertical : 10
    // alignItems : 'center',
    // justifyContent : 'center'
  },
  orderInnerContainer : {
    flexDirection :'row',
    justifyContent : 'space-between',
    // borderWidth : 1,
    borderBottomWidth : 1,
    paddingBottom : 20,
    alignItems : 'center',

  },
  map : {
    width : wp('25%'),
    height : hp('15%'),
    resizeMode : 'cover',
    borderRadius : 25,
  },
  orderBottom : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding  : 10,
  },
  idTxt : {
    fontFamily : 'Poppins-Bold',
    fontSize : 16,
    color : colors.black
  },
  orderOn : {
    fontFamily : 'Poppins-Regular',
    color : colors.primaryGreen,
    fontSize : 14,

  },
  address : {
    fontFamily : 'Poppins-Regular',
    color : colors.grey,
    fontSize : 14,
  },
  price : {
    fontFamily : 'Poppins-Regular',
    fontSize : 16,
    color : colors.primaryGreen
  },
  idTxtNormal : {
    fontFamily : 'Poppins-Regular',
    fontSize : 14,
    color : colors.black
  }


});

export default style;
