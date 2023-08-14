import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screen
import Home from './Home';
import Details from './Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>  //stack capital 
        <stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: "Trending Product"
          }}
        />
        <stack.Screen 
          name='Details'
          component={Details}
          options={{
            title: "Details of Trending Product"
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
