import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';


class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = {
                style: styles.toolbar,
                title: this.props.title,
                onActionSelected: this.onActionSelected,
                titleColor: '#FFFFFF',
                subTitleColor: '#FFFFFF'
        }
        if(this.props.showBackButton) {
            props.navIcon = {uri: 'ic_navigate_before_white_24dp'};
            props.onIconClicked = () => {this.props.onBack(this.props.scene) };
        }

        let navBar = React.createElement(ToolbarAndroid, props);
        return (
            navBar
        );
    }
};

const styles = StyleSheet.create({
    toolbar: {
        alignSelf: 'stretch',
        height: 56,
        backgroundColor: '#303F9F',
    },
});

export default Toolbar;