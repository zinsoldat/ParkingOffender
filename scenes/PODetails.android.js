import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

import PODetails from '../components/PODetails/PODetails';
import ActionButton from 'react-native-action-button';

export default class PODetailsScene extends Component {
  
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={{uri: 'ic_navigate_before_white_24dp'}}
          onIconClicked={() => {
            this.props.onBack(0);
          }}
          style={styles.toolbar}
          title={this.props.title}
          onActionSelected={this.onActionSelected}
          titleColor='#FFFFFF'
          subTitleColor='#FFFFFF'>
        </ToolbarAndroid>
        <PODetails {...this.props}/>
        <ActionButton buttonColor="#CDDC39"
           onPress={() => { console.log("hi")}}> 
        </ActionButton>
      </View>
    );
  }

  onActionSelected(action) {
    switch (action) {
      case 'Settings':
        break;
      case 'Send':
        break;
      default:
        break;
    }
  }
}

const styles = StyleSheet.create({
  toolbar: {
    alignSelf: 'stretch',
    height: 56,
    backgroundColor: '#303F9F',
  },
});
