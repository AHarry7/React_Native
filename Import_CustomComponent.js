
// File of our custom component 

import React from "react";
import {Text, StyleSheet, Button, View} from 'react-native';


const CustomComponents = () => {
  return (
  <Text style = {style.textStyle}> My custom component </Text> 
 
  );
}

const style = StyleSheet.create({

  textStyle: {
    color : 'red',
    textAlign : "center",
    
    textAlignVertical : "center",
  },



});

export default CustomComponents;


// Our Main App.js

import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import CustomComponents from './src/screens/CustomComponent';

const App = () => {
  return (
    <View>
      <Text style = {style.textStyle}> Hello world </Text>
      <CustomComponents/>
    </View>

  );
};

const style = StyleSheet.create({

  textStyle: {
    color : 'red',
    marginTop : 400,
    textAlign : "center",
    textAlignVertical : "center",
  }


});

export default App;
