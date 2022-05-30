// 1 Import libraries

import React from "react";
import {Text, StyleSheet, Button, View} from 'react-native';


// 2 Arrow function 

const App = () => {
  return (
  <Text style = {style.textStyle}> Hello World! </Text> ,
  
 <Button title="Press Me" style = {style.ButtonStyle}>

 </Button>
  );
}

// 3 Styling

const style = StyleSheet.create({

  textStyle: {
    color : 'red',
    flex : 1,
    textAlign : "center",
    textAlignVertical : "center",
  },

  ButtonStyle: {
    flex : 1,
    alignContent: "center"
    
  }


});

// 4 Export

export default App;
