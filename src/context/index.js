import React, {createContext, useContext, useEffect, useState} from 'react';
import {useWindowDimensions, Dimensions as dim} from 'react-native';

export const DimensionContext = createContext();
export const useDimensionContext = () => useContext(DimensionContext);
export const DimensionContextProvider = ({children}) => {
  const dimensions = useWindowDimensions();

  const initHeight = dim.get('window').height;
  const initWidth = dim.get('window').width;
// const {initHeight, initWidth} = dimensions;
  

  const [windowWidth, setWindowWidth] = useState(initWidth);
  const [windowHeight, setWindowHeight] = useState(initHeight);

  useEffect(() => {
    setItem();
  }, [dimensions]);

  const setItem = () => {
    const {height, width} = dimensions;
    setWindowHeight(height);
    setWindowWidth(width);
  };
  return (
    <DimensionContext.Provider value={{windowWidth, windowHeight }}>
      {children}
    </DimensionContext.Provider>
  );
};
