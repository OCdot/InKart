import {
  LOGIN,
  SIGNOUT,
  UPDATECATEGORY,
  UPDATEPROFILE,
  UPDATECARTCOUNT,
  UPDATEWISHIDS,
} from './constants';

const initialState = {
  userId: '',
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  profileimage: '',
  updatecategory: [],
  cartCount: 0,
  wishIds: [],
};
export const inKartReducer = (state = initialState, action) => {
  // console.warn(action.type);

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        mobile: action.payload.mobile,
        isLoggedIn: true,
        profileimage: action.payload.profileimage,
      };
    case SIGNOUT:
      return {
        ...state,
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        isLoggedIn: false,
        profileimage: '',
        cartCount: 0,
      };
    case UPDATEPROFILE:
      return {
        ...state,

        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        mobile: action.payload.mobile,

        profileimage: action.payload.profileimage,
      };
    case UPDATECATEGORY:
      // console.warn('ok',action.payload.updatecategory);
      return {
        ...state,
        updatecategory: action.payload.updatecategory,
      };
    case UPDATECARTCOUNT:
      return {
        ...state,
        cartCount: action.payload.cartCount,
      };

      case UPDATEWISHIDS : 
      return {
        ...state,
        wishIds : action.payload.wishIds,
      }


    default:
      return state;
  }
};
