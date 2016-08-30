import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

// import POList from './components/POList/POList'
import App from './app/components/App'
// import PODetails from './scenes/PODetails.android';
// import POEdit from './scenes/POEdit.android';
import ActionButton from 'react-native-action-button';

class ParkingOffender extends Component {
  constructor(props) {
    super(props);
    // bind functions to this instance
    this._getOnForward = this._getOnForward.bind(this);
    this._getOnBack = this._getOnBack.bind(this);
  }

  render() {
    return (
      <App />
    );
  }

  _getOnForward(navigator) {
    return function onForward(target, data) {
      var route = this.state.routes[target];
      route.data = data;
      navigator.push(route);
    }.bind(this);
  }

  _getOnBack(navigator) {
    return function () {
      navigator.pop();
    }.bind(this);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    alignSelf: 'stretch',
    height: 56,
    backgroundColor: '#303F9F',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('ParkingOffender', () => ParkingOffender);
