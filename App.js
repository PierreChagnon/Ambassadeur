import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TitleScreen from './TitleScreen';
import GameMasterHandler from './GameMasterHandler';
import PlayerList from './PlayerList';
import Teams from './screens/Teams';
import WordsList from './screens/WordsList';
import GameSettings from './screens/GameSettings';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { StateProvider } from './provider/StateProvider';

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="TitleScreen" screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="TitleScreen" component={TitleScreen} />
      <Stack.Screen name="GameMasterHandler" component={GameMasterHandler} options={{ gestureEnabled: false }} />
      <Stack.Screen name="PlayerList" component={PlayerList} />
      <Stack.Screen name="Teams" component={Teams} />
      <Stack.Screen name="WordsList" component={WordsList} />
      <Stack.Screen name="GameSettings" component={GameSettings} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <StateProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </StateProvider>
  );
}

const Stack = createNativeStackNavigator();

