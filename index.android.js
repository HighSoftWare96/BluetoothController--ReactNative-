// import delle librerie e dei componenti react =============================
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
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import {
  OneBtnMode
} from './screens/oneBtnMode'


// costanti e stili CSS =============================
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  toolbar: {
    // PRIMARY COLOR
    backgroundColor: '#2196F3',
    height: 56,
    width: '100%',
  },
});

const drawerStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 13,
    backgroundColor: '#BBDEFB',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    padding: 10
  },
  titleImage: {
    width: 45,
    height: 45,
  },
  buttons: {
    alignItems: 'flex-start',
    paddingTop: 2
  },
  singleBtn: {
    width: '100%',
    flexDirection: 'row',
    padding: 18,
  },
  buttonText: {
    paddingLeft: 15,
    fontSize: 16,
  },
  buttonIcon: {
    width: 25,
    height: 25
  }
});

// definizioni di variabili utili =============================

// classe principale per il rendering degli elementi su schermo =============================
export default class BluetoothController extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    const toHome = function () {
      navigate('Home');
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const toKybrd = function () {
      navigate('Home');
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const toOneBtn = function () {
      navigate('OneBtnMode');
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const toPad = function () {
      navigate('Home');
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const toSettings = function () {
      navigate('Home');
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const drawerView = (
      <View style={{ flex: 1 }}>
        <View style={drawerStyles.container}>
          <Image source={require('./images/icon.png')} style={drawerStyles.titleImage} />
          <Text style={drawerStyles.title}>Bluetooth Controller</Text>
        </View>
        <ScrollView>
          <View style={drawerStyles.buttons}>
            <TouchableNativeFeedback onPress={toHome} underlayColor="white">
              <View style={drawerStyles.singleBtn}>
                <Image source={require('./images/homeIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Bluetooth Devices</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={toKybrd} underlayColor="white">
              <View style={drawerStyles.singleBtn}>
                <Image source={require('./images/kybrdIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Keyboard mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={toOneBtn} underlayColor="white">
              <View style={drawerStyles.singleBtn}>
                <Image source={require('./images/onebtnIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>One Button mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={toPad} underlayColor="white">
              <View style={drawerStyles.singleBtn}>
                <Image source={require('./images/padIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Pad mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={toSettings} underlayColor="white">
              <View style={drawerStyles.singleBtn}>
                <Image source={require('./images/settingsIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Settings</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        keyboardDismissMode='on-drag'
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => drawerView}
        ref={'DRAWER_REF'} // riferimento per recuperare tramite this.refs['DRAWER_REF'] la sidebar
      >
        {/*Il contenuto della view va ALL'INTERNO DEL DRAWER TAG*/}
        <View style={mainStyles.container}>
          <StatusBar
            backgroundColor="#1976D2"
            barStyle="light-content"
          />
          <ToolbarAndroid
            title='Bluetooth Controller'
            titleColor='white'
            style={mainStyles.toolbar}
            navIcon={require('./images/menu.png')}
            onIconClicked={() => {
              // apro la sidebar grazie al riferimento che mi sono creato
              this.refs['DRAWER_REF'].openDrawer();
            }}
            actions={[{ title: 'Info', icon: require('./images/info.png'), show: 'always' }]}
            onActionSelected={(position) => {
              Alert.alert("Instructions", "Welcome to React Native! To get started, edit index.android.js, double tap R on your keyboard to reload, shake or press menu button for dev menu");
            }}
          />
        </View>
      </DrawerLayoutAndroid>

    );
  }
}
// impostazione del routing
const RouterOutlet = StackNavigator({
  Home: { screen: BluetoothController },
  OneBtnMode: { screen: OneBtnMode },
});

AppRegistry.registerComponent('BluetoothController', () => RouterOutlet);