import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { OneBtnMode } from "./screens/oneBtnMode";
import { Home } from "./screens/home"

export default class BluetoothController extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: null,
  };

  render() {
    return (
      <Home nav={this.props.navigation} />
    );
  }
};

