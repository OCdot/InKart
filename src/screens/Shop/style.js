import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../components/common/colors";

const style = orientation => StyleSheet.create({
    mainContainer : {
        // padding :5
    },
    catView :{
        marginRight :15,
    //    justifyContent : 'space-around',
    //    alignItems :''
        padding :10
    },
    catViewTxt : {
        fontFamily : 'Poppins-Regular',
        fontSize : 20,
        color : colors.primaryGreen
    },
    categories :{
        backgroundColor : colors.secondaryGreen,
        // width : orientation ? wp('100%') : hp('110%')
    },


    FlatListContainer: {
        // borderWidth: 1,
        // borderColor: colors.primaryGreen,
        backgroundColor: colors.white_lvl_1,
        padding: 20,
        borderRadius: 15,
        marginHorizontal:10,
        marginBottom: 15,
      },
      FlatListImgContainer: {
        flexDirection: 'row',
      },
      content: {
        marginLeft: 25,
        borderLeftWidth: 1,
        paddingLeft: 20,
      },
      FlatListImg: {
        height: hp('15%'),
        width: wp('15%'),
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      name: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: colors.black,
      },
      detail: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: colors.black,
      },
      price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: colors.danger,
        fontWeight: 'bold',
        // marginRight : 10
      },
      priceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth :1,
        width: orientation ? wp('70%') : hp('80%'),
      },
      offView: {
        // backgroundColor: colors.primaryGreen,
        borderRadius: 10,
        padding: 1,
        paddingLeft: 5,
        height: hp('3%'),
      },
      offTxt: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: colors.primaryGreen,
        // marginTop : 10
      },
      qunView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: colors.primaryGreen,
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
        // marginLeft: 19,
        marginTop: -10,
        // height : hp('4.5%')
      },
      txt1: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: colors.black,
        fontWeight: 'bold',
  
        padding: 5,
      },
      txt2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
  
        fontWeight: 'bold',
        color: colors.primaryGreen,
        padding: 5,
      },
    
 
})
export default style