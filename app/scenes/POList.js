import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Toolbar from '../components/Toolbar/ToolbarContainer';
import FilterBar from '../components/FilterBar/FilterBarContainer';
import POList from '../components/POList/POListContainer';
import ActionButton from '../components/ActionButton/ActionButtonContainer';

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