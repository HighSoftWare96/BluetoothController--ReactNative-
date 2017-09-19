import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  ToolbarAndroid,
  Image,
  TouchableHighlight
} from 'react-native';


export class OneBtnMode extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    // in state troviamo i parametri passati dal navigatore
    const { state } = this.props.navigation;
    return (
      <Text>Something works... {state.params.title}</Text>
    );
  }
}