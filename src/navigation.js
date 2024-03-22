import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Celula from './Celula';
import Events from './Events';
import Profile from './Profile';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Celula" component={Celula}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}

export default Navigation;
