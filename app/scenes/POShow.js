import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Toolbar from '../components/Toolbar/ToolbarContainer';
import POShow from '../components/POShow/POShowContainer';
import ActionButton from '../components/ActionButton/ActionButtonContainer';

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