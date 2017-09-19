import React, { Component } from 'react';
import {
    Text
} from 'react-native';

export class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
      };
    render() {
        return (
            <Text>Home working?</Text>
        );
    }
}
