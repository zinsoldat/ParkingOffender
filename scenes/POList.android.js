import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';

import POList from '../components/POList/POListContainer'
import ActionButton from 'react-native-action-button';

export default class POListScene extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.title}
          actions={[
            { title: 'Send', icon: { uri: 'ic_mail_outline_white_24dp' }, show: 'always' },
            { title: 'Settings', icon: { uri: 'ic_settings_white_24dp' }, show: 'always' }]}
          onActionSelected={this.onActionSelected}
          titleColor='#FFFFFF'
          subTitleColor='#FFFFFF'>
        </ToolbarAndroid>
        <POList
          onForward={this.props.onForward}
          parkingOffenders={this.props.parkingOffenders}
          />
        <ActionButton buttonColor="#CDDC39"
          onPress={() => {
            this.props.onForward('2');
          } }>
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
