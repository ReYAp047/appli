import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/vue/connection/Home';
import Connection from './src/vue/connection/Connection';
import Inscription from './src/vue/connection/Inscription';

const Navigation = createStackNavigator({
  Home: {screen:Home},
  Connection: {screen:Connection},
  Inscription: {screen:Inscription},

  });

  const App = createAppContainer(Navigation);

export default App;
