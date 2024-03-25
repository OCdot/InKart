import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const updateProfileImage = async image => {
  return new Promise(async resolve => {
    try {
      // console.warn('image :', image);
      const uri = image;
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      // console.warn('file Name : ', filename);
      const pathForFirebaseStorage = await getPathForFirebaseStorage(uri);
      // console.warn('pathForbaseStorage:', pathForFirebaseStorage);

      await storage().ref(filename).putFile(pathForFirebaseStorage);
      await storage()
        .ref(filename)
        .getDownloadURL()
        .then(url => {
          // console.warn('download URL :', url);
          resolve(url);
        });
    } catch (error) {}
  });
};

const getPathForFirebaseStorage = async uri => {
  if (Platform.OS === 'ios') {
    return uri;
  } 
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
  
};
