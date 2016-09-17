import { SAVE_PO, SEND_PO, SHOW_PO, EDIT_PO, DELETE_PO, SHOW_LIST, SHOW_SETTINGS, SAVE_SETTINGS, ACTION_SELECTED } from './action';
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
        parkingOffenders: dataProvider.getParkingOffenders(),

        // edit/show state
        parkingOffender: {}
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

        case ACTION_SELECTED:

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
        showWithText: false
    },
    save: {
        title: 'save',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    cancel: {
        title: 'cancel',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    settings: {
        title: 'settings',
        icon: {uri: 'ic_settings_white_24dp'},
        show: 'always',
        showWithText: false
    },
    edit: {
        title: 'edit',
        icon: {uri: 'ic_mode_edit_white_24dp'},
        show: 'always',
        showWithText: false
    },
    delete: {
        title: 'delete',
        icon: {uri: 'ic_delete_white_24dp'},
        show: 'always',
        showWithText: false
    }
}

export default parkingOffenderApp;