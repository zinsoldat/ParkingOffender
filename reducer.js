import {SAVE_PO, SEND_PO, SHOW_PO, EDIT_PO, DELETE_PO, SHOW_LIST, SHOW_SETTINGS, SAVE_SETTINGS} from './actions';
import Data from './data';

function initilizeState() {
    let initialState = {
        title: '',
        currentScene: '',
        routes: {},
        settings: {},
        parkingOffender: -1,
        parkingOffenders: []
    }
    let dataProvider = new Data();
    let parkingOffenders = dataProvider.getParkingOffenders();

    parkingOffenders.forEach((po) => {
        initialState[po.parkingOffenderID] = po;
        initialState.parkingOffenders.push(po.parkingOffenderID);
    });

    return initialState;
}

function parkingOffenderApp(state = initilizeState(), action) {
    // For now, don’t handle any actions
    // and just return the state given to us.
    let newState = {};
    switch (action.type) {
        case SHOW_LIST:
            Object.assign(newState, state, { parkingOffender: -1 });
            break;
        case SHOW_PO:
            Object.assign(newState, state, { parkingOffender: action.parkingOffenderID });
            break;
        default:
            newState = state;
    }

    return newState
}

export default parkingOffenderApp;