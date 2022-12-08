// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import DaftarDoa from './screen/DaftarDoa';
import Doa1 from './screen/Doa/Doa1';
import Doa2 from './screen/Doa/Doa2';
import Doa3 from './screen/Doa/Doa3';
import Doa4 from './screen/Doa/Doa4';
import Doa5 from './screen/Doa/Doa5';
import Doa6 from './screen/Doa/Doa6';
import Doa7 from './screen/Doa/Doa7';
import Doa8 from './screen/Doa/Doa8';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doa"
          component={DaftarDoa}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Doa1"
          component={Doa1}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa2"
          component={Doa2}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa3"
          component={Doa3}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa4"
          component={Doa4}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa5"
          component={Doa5}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa6"
          component={Doa6}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa7"
          component={Doa7}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
        <Stack.Screen
          name="Doa8"
          component={Doa8}
          options={{
            headerShown: true,
            title: 'Doa Harian',
            headerStyle: {
              backgroundColor: '#5172AD',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
