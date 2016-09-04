import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Toolbar from '../containers/Toolbar';
import FilterBar from '../containers/FilterBar';
import POList from '../containers/POList';
import ActionButton from '../containers/ActionButton';

class POListScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
                // <Toolbar />
        return (
            <View store={this.store} style={styles.view}>
                <Toolbar />
                <FilterBar />
                <POList />
                <ActionButton />
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