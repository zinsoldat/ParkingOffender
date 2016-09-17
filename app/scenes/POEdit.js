import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Toolbar from '../components/Toolbar/ToolbarContainer';
import POEdit from '../components/POEdit/POEditContainer';
import ActionButton from '../components/ActionButton/ActionButtonContainer';

class POListScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View store={this.store} style={styles.view}>
                <Toolbar />
                <POEdit />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {
        alignSelf: 'stretch',
        flex: 1
    }
});


export default POListScene;