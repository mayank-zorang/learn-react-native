
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';





function App(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#ffffff")   //[variable , methods ]


  const  generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBackground(color)
    console.log("background color change with the color code: " + color)
  }


  return (
   <>
    <StatusBar  backgroundColor="#000"/>
    <View style={[styles.container, {backgroundColor: randomBackground}] }>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  actionBtnText: {
    fontSize: 24,
    color: '#FFF',
    textTransform: 'uppercase',
  }
});

export default App;
