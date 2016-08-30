import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';
import ActionButton from 'react-native-action-button';


class ActionButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ActionButton buttonColor="#CDDC39"
                onPress={this.props.onAddClick}/>
        );
    }
};

const styles = StyleSheet.create({
});

export default ActionButtonComponent;