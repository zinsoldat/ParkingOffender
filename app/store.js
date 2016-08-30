import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

export function createAppStore() {
    let store = createStore(reducer);

    return store;
}