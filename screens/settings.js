import React, { Component } from 'react';
import { DrawerLayoutAndroid, AppRegistry, Text, View, Alert, StatusBar, ToolbarAndroid, Image, TouchableNativeFeedback, ScrollView, } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { drawerStyles, mainStyles } from '../styles/index.styles';
import { CommonBars } from '../common/common.components';
import { evaluateActionBarTitle } from '../common/common.functions';

export class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/settingsIcon.png')}
        style={[drawerStyles.buttonIcon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    // in state troviamo i parametri passati dal navigatore
    const { state } = this.props.navigation;
    return (
      <View>
        {/*Passo il navigatore alla barra principale in modo poi da poter aprire il drawer*/}
        <CommonBars navigate={navigate} title={evaluateActionBarTitle(state.routeName)}/> 
        <Text>Something works...</Text>
      </View>
    );
  }
}

