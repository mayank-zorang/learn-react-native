import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import  TrackPlayer, {State, usePlaybackState} from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackSerivce } from '../../musicPlayerService'

const ControlCenter = () => {

    const playBackState = usePlaybackState()

    const skipToNext =async () => {
        await TrackPlayer.skipToNext()
    }

    const skipToPrevious =async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback =async (playback:State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()

        if(currentTrack !== null){
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play()
            }else{
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name= "skip-Previous" size={40}></Icon>
        </Pressable>
        <Pressable onPress={()=> togglePlayback(playBackState)}>
            <Icon 
            style={styles.icon} 
            name={playBackState===State.Playing?"pause":"play-arrow"} 
            size={75}></Icon>
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name= "skip-Next" size={40}></Icon>
        </Pressable>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });
export default ControlCenter