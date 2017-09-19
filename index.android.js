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
} from './screens/oneBtnMode';
import {
  Home
} from './screens/home';


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
  selectedBtn: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    flexDirection: 'row',
    padding: 18,
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
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const { state } = this.props.navigation;

    const _toHome = function () {
      // grazie all'id posso poi fare in modo che il bottone della sezione corrente si selezioni e diventi grigio
      navigate('Home', { title: 'Connect device', id: 0 });
      // refs continere i riferimenti al drawer (vedi parametro ref dato nel tag del drawer)
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const _toKybrd = function () {
      navigate('Home', { title: 'Keyboard mode', id: 1 });
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const _toOneBtn = function () {
      navigate('OneBtnMode', { title: 'One Btn mode', id: 2 });
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const _toPad = function () {
      navigate('Home', { title: 'Pad mode', id: 3 });
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    const _toSettings = function () {
      navigate('Home', { title: 'Settings', id: 4 });
      this.refs['DRAWER_REF'].closeDrawer();
    }.bind(this);

    var calculateMenuStyle = function (nItem) {
      // a seconda dell'elemento che arriva restituisce lo stile del bottone selezionato se l'id corrisponde al routing attuale
      if (state.params && nItem == state.params.id)
        return drawerStyles.selectedBtn;
      else
        return drawerStyles.singleBtn;
    }

    var drawerView = (
      <View style={{ flex: 1 }}>
        <View style={drawerStyles.container}>
          <Image source={require('./images/icon.png')} style={drawerStyles.titleImage} />
          <Text style={drawerStyles.title}>Bluetooth Controller</Text>
        </View>
        <ScrollView>
          <View style={drawerStyles.buttons}>
            <TouchableNativeFeedback onPress={_toHome} underlayColor="white">
              {/*Passo appunto ad una funzioncina il numero della voce, se corrisponde a quella attiva data dall'id del navigatore allora si evidenzierà di grigio*/}
              <View style={calculateMenuStyle(0)}>
                <Image source={require('./images/homeIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Bluetooth Devices</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={_toKybrd} underlayColor="white">
              <View style={calculateMenuStyle(1)}>
                <Image source={require('./images/kybrdIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Keyboard mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={_toOneBtn} underlayColor="white">
              <View style={calculateMenuStyle(2)}>
                <Image source={require('./images/onebtnIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>One Button mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={_toPad} underlayColor="white">
              <View style={calculateMenuStyle(3)}>
                <Image source={require('./images/padIcon.png')} style={drawerStyles.buttonIcon} />
                <Text style={drawerStyles.buttonText}>Pad mode</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={_toSettings} underlayColor="white">
              <View style={calculateMenuStyle(4)}>
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
          {/*Se i parametri sono nulli allora non è stata fatta una navigazione.. quindi siamo all'inizio, altrimenti la nav contiene il titolo della sezione scelta
            e lo usiamo per la toolbar. this.props.navigation.state.params.title contine questo dato */}
          <ToolbarAndroid
            title={state.params == undefined ? 'Bluetoooth Controller' : state.params.title}
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
