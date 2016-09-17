import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    Text
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import { Provider } from 'react-redux'
import { createAppStore } from '../store';

import POList from '../scenes/POList';
import POShow from '../scenes/POShow';
import POEdit from '../scenes/POEdit';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createAppStore();

        // bind methods to class
        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        // sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight}}
        return (
            <Provider store={this.store}>
                <Router hideNavBar={true}>
                    <Scene key="root">
                        <Scene key="list" component={POList} initial={true}/>
                        <Scene key="show" component={POShow} />
                        <Scene key="edit" component={POEdit} />
                    </Scene>
                </Router>
            </Provider>
            );
    }

    _renderScene(route, navigator) {
        let content;
        switch (route) {
            case 'settings':
                break;
            case 'edit':
                break;
            case 'details':
                break;
            case 'list':
            default:
                content = <POList />;
        }
        return (
                content
        );
    }
}

export default App;