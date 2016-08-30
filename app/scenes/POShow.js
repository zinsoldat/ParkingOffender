import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Toolbar from '../containers/Toolbar';
import POShow from '../containers/POShow';
import ActionButton from '../containers/ActionButton';

class POShowScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View store={this.store} style={styles.view}>
                <Toolbar showBackButton={true}/>
                <POShow />
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


export default POShowScene;