// import delle librerie e dei componenti react =============================
import React, { Component } from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems, View, Image, Text } from 'react-navigation';
import { drawerStyles } from './styles/common.styles';
import { AppHome } from './app';
import { OneBtnMode } from './screens/oneBtnMode';
import { KybrdMode } from './screens/kybrdMode';
import { PadMode } from './screens/padMode';
import { Settings } from './screens/settings';
import { CustomDrawerContentComponent } from './common/common.components';


// classe principale per il rendering degli elementi su schermo =============================
export default class BluetoothController extends React.Component {
  render() {
    return (
      <AppHome navigation={this.props.navigation} />
    );
  }
}
// impostazione del routing
const RouterOutlet = DrawerNavigator({
  Home: { screen: AppHome },
  KybrdMode: { screen: KybrdMode },
  OneBtnMode: { screen: OneBtnMode },
  PadMode: { screen: PadMode },
  Settings: { screen: Settings },
}, {
    drawerWidth: 280,
    contentComponent: CustomDrawerContentComponent,
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#1976D2',
    },
  });

AppRegistry.registerComponent('BluetoothController', () => RouterOutlet);
