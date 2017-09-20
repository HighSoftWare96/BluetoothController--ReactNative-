import React, { Component } from 'react';
import { DrawerLayoutAndroid, AppRegistry, Text, View, Alert, StatusBar, ToolbarAndroid, Image, TouchableNativeFeedback, ScrollView, } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { drawerStyles, mainStyles } from '../styles/common.styles';
import { CommonBars } from '../common/common.components';
import { evaluateActionBarTitle } from '../common/common.functions';

export class OneBtnMode extends Component {
  static navigationOptions = {
    title: 'One Button mode',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/onebtnIcon.png')}
        style={[drawerStyles.buttonIcon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    // in state troviamo i parametri passati dal navigatore // e il route del componente attuale
    const { state } = this.props.navigation;
    return (
      <View>
        {/*Passo il navigatore alla barra principale in modo poi da poter aprire il drawer -- passo anche il titolo della schermata vedi common.functions per la funzione usata*/}
        <CommonBars navigate={navigate} title={evaluateActionBarTitle(state.routeName)} />
        <Text>{state.routeName}</Text>
      </View>
    );
  }
}

