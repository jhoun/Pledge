import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Homepage from './Homepage';
import PledgePage from './PledgePage';

const RootStack = createStackNavigator(
  {
    Home: Homepage,
    Details: PledgePage
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
