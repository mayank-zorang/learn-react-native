import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image 
        style={styles.diceImage}
        source={imageUrl}
      />
    </View>
  )
}

function App(): JSX.Element {

  const [diceImage, SetDiceImage] = useState<ImageSourcePropType>(DiceOne)  //todo

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random()*6)+1;

    switch (randomNumber) {
      case 1:
        SetDiceImage(DiceOne)
        break;
      case 2:
        SetDiceImage(DiceTwo)
        break; 
      case 3:
        SetDiceImage(DiceThree)
        break;
      case 4:
        SetDiceImage(DiceFour)
        break;
      case 5:
        SetDiceImage(DiceFive)
        break;        
      case 6:
        SetDiceImage(DiceSix)
        break;
      default:
        SetDiceImage(DiceThree)
        break;
    }
    ReactNativeHapticFeedback.trigger("keyboardPress", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
