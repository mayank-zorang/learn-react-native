
import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View,
} from 'react-native';

import {setupPlayer, addTrack} from "../musicPlayerService"
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {

  const [isPlayerReady, SetIsPlayerReady] = useState(false)


  async function setup() {
    let isSetup = await setupPlayer()

    if(isSetup){
      await addTrack()
    }
    
    SetIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])
  

  // If player is not ready 
  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  continue:{
    flex: 1
  }
})