import { SAVE_PO, SEND_PO, SHOW_PO, EDIT_PO, DELETE_PO, SHOW_LIST, SHOW_SETTINGS, SAVE_SETTINGS, ACTION_SELECTED, UPDATE_PO } from './action';
import Data from './data';

function initilizeState() {
    let dataProvider = new Data();
    let initialState = {
        // toolbar state
        title: 'Parking Offenders',
        actions: [actions.send, actions.settings],
        showBackButton: false,
        scene: SHOW_LIST,

        // routing state
        previousRoute: 'list',
        currentRoute: 'list',

        // settings state
        settings: {},

        // list state
        parkingOffenderFilter: 'ALL',
        parkingOffenderFilters: ['ALL', 'SENDED', 'NOT SENDED'],
        parkingOffenders: dataProvider.getParkingOffenders() || [],

        // edit/show state
        parkingOffender: {},
        editParkingOffender: {}
    }

    return initialState;
}

function parkingOffenderApp(state = initilizeState(), action) {
    console.log(action);
    let newState = {};
    switch (action.type) {
        case SHOW_LIST:
            Object.assign(newState, state, {
                title: 'Parking Offenders',
                actions: [actions.send, actions.settings],
                showBackButton: false,
                scene: SHOW_LIST,
                parkingOffenderFilter: action.data ? action.data : state.parkingOffenderFilter
            });
            break;
        case SHOW_PO:
            Object.assign(newState, state, { 
                title: action.data.licensePlate,
                actions: [actions.delete, actions.edit],
                parkingOffender: action.data,
                showBackButton: true,
                scene: SHOW_PO
            });
            break;
        case EDIT_PO:
            Object.assign(newState, state, {
                title: 'New Parking Offender',
                actions: [actions.save],
                editParkingOffender: action.data,
                showBackButton: true,
                scene: EDIT_PO
            });
            break;
        case UPDATE_PO:
            Object.assign(newState, state, {
                editParkingOffender: action.data,
            });
            break;
        default:
            newState = state;
    }
    console.log(newState);
    return newState
}

const actions = {
    send: {
        title: 'filter',
        icon: {uri: 'ic_mail_outline_white_24dp'},
        show: 'always',
        showWithText: false,
        key: ''
    },
    save: {
        title: 'save',
        icon: {uri: ''},
        show: 'always',
        showWithText: false,
        key: SAVE_PO
    },
    cancel: {
        title: 'cancel',
        icon: {uri: ''},
        show: 'always',
        showWithText: false,
        key: ''
    },
    settings: {
        title: 'settings',
        icon: {uri: 'ic_settings_white_24dp'},
        show: 'always',
        showWithText: false,
        key: SHOW_SETTINGS
    },
    edit: {
        title: 'edit',
        icon: {uri: 'ic_mode_edit_white_24dp'},
        show: 'always',
        showWithText: false,
        key: EDIT_PO
    },
    delete: {
        title: 'delete',
        icon: {uri: 'ic_delete_white_24dp'},
        show: 'always',
        showWithText: false,
        key: DELETE_PO
    }
}

export default parkingOffenderApp;