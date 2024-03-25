import {
  LOGIN,
  SIGNOUT,
  UPDATECARTCOUNT,
  UPDATECATEGORY,
  UPDATEPROFILE,
  UPDATEWISHIDS,
} from './constants';

export const login = data => ({
  type: LOGIN,
  payload: {
    userId: data.userId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobile: data.mobile,
    profileimage: data.profileimage,
  },
});

export const signout = data => ({
  type: SIGNOUT,
  payload: {},
});

export const updateProfile = data => ({
  type: UPDATEPROFILE,
  payload: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    mobile: data.mobile,
    profileimage: data.profileimage,
  },
});

export const updateCategory = data => ({
  type: UPDATECATEGORY,
  payload: {
    updatecategory: data,
  },
});

export const updateCartCount = data => ({
  type: UPDATECARTCOUNT,
  payload: {
    cartCount: data,
  },
});

export const updateWishIds =data =>({
  type :UPDATEWISHIDS,
  payload :{
    wishIds :data
  }
})
