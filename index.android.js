import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

//import POList from './components/POList/POList'
import POList from './scenes/POList.android'
import PODetails from './scenes/PODetails.android';
import POEdit from './scenes/POEdit.android';
import DataProvider from './data'
import ActionButton from 'react-native-action-button';

import { createStore } from 'redux'
import reducer from './reducer'

class ParkingOffender extends Component {
  constructor(props) {
    super(props);
    // bind functions to this instance
    this._getOnForward = this._getOnForward.bind(this);
    this._getOnBack = this._getOnBack.bind(this);
    this._dataProvider = new DataProvider();
    this.store = createStore(reducer)

    // set state
    this.state = {
      routes: [
        { title: 'Parking Offenders', index: 0 },
        { title: 'Details', index: 1 },
        { title: 'Edit Parking Offender', index: 2 },
        { title: 'Settings', index: 10 }
      ],
      parkingOffenders: this._dataProvider.getParkingOffenders()
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.state.routes[0]}
        renderScene={(route, navigator) => {
          var scene;

          switch (route.index) {
            case 1:
              scene = <PODetails
                {...route.data}
                onForward={ this._getOnForward(navigator) }
                onBack={ this._getOnBack(navigator) }/>;
              break;

            case 2:
              scene = <POEdit
                {...route.data}
                title={route.title}
                onForward={ this._getOnForward(navigator) }
                onBack={ this._getOnBack(navigator) }/>;
              break;

            default:
              // set POList as defaul route. Starting point for the app
              scene = <POList title={route.title}
                onForward={ this._getOnForward(navigator) }
                onBack={ this._getOnBack(navigator) }
                parkingOffenders={this.state.parkingOffenders}/>;
          }

          return scene;
        } }/>
    );
  }

  _getOnForward(navigator) {
    return function onForward(target, data) {
      console.log(target);
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
