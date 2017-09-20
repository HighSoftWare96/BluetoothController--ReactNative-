import React, { Component } from 'react';
import { DrawerLayoutAndroid, AppRegistry, Text, View, Alert, StatusBar, ToolbarAndroid, Image, TouchableNativeFeedback, ScrollView, } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { OneBtnMode } from './screens/oneBtnMode';
import { drawerStyles, mainStyles } from './styles/index.styles';
import { CommonBars } from './common/common.components';
import { evaluateActionBarTitle } from './common/common.functions';

export class AppHome extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Home - connect devices',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/homeIcon.png')}
                style={[drawerStyles.buttonIcon, { tintColor: tintColor }]}
            />
        ),
    };


    render() {
        const { navigate } = this.props.navigation;
        const { state } = this.props.navigation;
        return (
            <View>
                {/*Passo il navigatore alla barra principale in modo poi da poter aprire il drawer*/}
                <CommonBars navigate={navigate} title={evaluateActionBarTitle(state.routeName)}/>
                <Text>Welcome home!</Text>
            </View>
        );

    }
}