import React, { Component } from 'react'
import { View, Image, Text, ScrollView, StatusBar, ToolbarAndroid, Alert } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { mainStyles, drawerStyles } from '../styles/index.styles';

// componente necessario a inserire elementi nuovi nel drawer predefinito
export class CustomDrawerContentComponent extends Component {
    render() {
        return (
            <View style={drawerStyles.container}>
                {/* Header custom */}
                <View style={drawerStyles.headerContainer}>
                    <Image source={require('../images/icon.png')} style={drawerStyles.titleImage} />
                    <Text style={drawerStyles.title}>Bluetooth Controller</Text>
                </View>
                <ScrollView>
                    {/*in props in questo caso abbiamo tutte le voci del menu da inserire dopo l'header custom*/}
                    <DrawerItems {...this.props} />
                </ScrollView>
            </View>
        );
    }
}

// barra di stato e di azione comune a tutte le altre componenti, mi viene passato il navigatore in modo da poter aprire il drawer con il pulsante
export class CommonBars extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#1976D2"
                    barStyle="light-content"
                />
                <ToolbarAndroid
                    title={this.props.title}
                    titleColor='white'
                    style={mainStyles.toolbar}
                    navIcon={require('../images/menu.png')}
                    onIconClicked={() => {
                        // recupero il navigatore dalle props ricevute
                        this.props.navigate('DrawerOpen');
                    }}
                    actions={[{ title: 'Info', icon: require('../images/info.png'), show: 'always' }]}
                    onActionSelected={(position) => {
                        Alert.alert("Instructions", "Welcome to React Native! To get started, edit index.android.js, double tap R on your keyboard to reload, shake or press menu button for dev menu");
                    }}
                />
            </View>
        );
    }
}