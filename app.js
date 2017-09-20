import React, { Component } from 'react';
import { DrawerLayoutAndroid, AppRegistry, Text, View, Alert, StatusBar, TouchableHighlight, ToolbarAndroid, Image, ScrollView, Button, AppState } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { OneBtnMode } from './screens/oneBtnMode';
import { drawerStyles, mainStyles } from './styles/common.styles';
import { homeStyles } from './styles/home.styles';
import { CommonBars } from './common/common.components';
import { evaluateActionBarTitle } from './common/common.functions';
import { BluetoothService } from './services/bluetooth.service';

export class AppHome extends React.Component {

    constructor(props) {
        super(props);
        this.bleStateHandler = BluetoothService.getEmitter().addListener('BleManagerDidUpdateState', this.handleEnablingBluetooth.bind(this));
        this.state = { blthOn: undefined };
        // controllo lo stato iniziale del bluetooth -- handleEnablingBluetooth gestirà l'evento
        BluetoothService.getStatus();
    }

    componentDidMount() {
        // inizializzo il modulo bluetooth una volta per tutte
        BluetoothService.initialize();
        AppState
    }

    static navigationOptions = {
        drawerLabel: 'Home - connect devices',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./images/homeIcon.png')}
                style={[drawerStyles.buttonIcon, { tintColor: tintColor }]}
            />
        ),
    };

    // gestore eventi di cambiamento del bluetooth
    handleEnablingBluetooth(args) {
        if (args.state == 'on') {
            this.setState(previousState => {
                return { blthOn: true };
            });
        }
        else {
            this.setState(previousState => {
                return { blthOn: false };
            });
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { state } = this.props.navigation;

        const enableBletooth = function () {
            BluetoothService.enableBlth().then(() => {
            }).catch(() => {
                Alert.alert("Bluetooth", "Bluetooth off!");
            })
        }.bind(this);

        return (
            <View style={{ flex: 1 }}>
                {/*Passo il navigatore alla barra principale in modo poi da poter aprire il drawer*/}
                <CommonBars navigate={navigate} title={evaluateActionBarTitle(state.routeName)} />
                <View style={homeStyles.mainPage}>
                    <View style={homeStyles.upContent}>
                        {/*Se lo stato indica che il bluetooth è spento allora mostrera l'immagine BN altrimenti quella blu*/}
                        <Image source={this.state.blthOn ? require('./images/blthOn.png') : require('./images/blthOff.png')} style={homeStyles.upContentImage} />
                        <View style={homeStyles.upContentButtons}>
                            {/*Stile e funzione determinati dallo stato del ble*/}
                            <TouchableHighlight underlayColor="#0D47A1" style={!this.state.blthOn ? homeStyles.upContentSingleBtn : homeStyles.upContentSingleBtnOff} onPress={this.state.blthOn ? null : enableBletooth}>
                                <View style={homeStyles.singleBtnContent}>
                                    <Image style={homeStyles.singleBtnIcon} source={require('./images/enable.png')} />
                                    <Text style={homeStyles.singleBtnText}>Enable bluetooth</Text>
                                </View>
                            </TouchableHighlight>
                            {/*TODO: quando bluetooth accesso mettere true*/}
                            <TouchableHighlight underlayColor="#0D47A1" style={homeStyles.upContentSingleBtn}>
                                <View style={homeStyles.singleBtnContent}>
                                    <Image style={homeStyles.singleBtnIcon} source={require('./images/scan.png')} />
                                    <Text style={homeStyles.singleBtnText}>Scan</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={homeStyles.downContent}>
                    </View>
                </View>
            </View>
        );

    }
}