import { SAVE_PO, SEND_PO, SHOW_PO, EDIT_PO, DELETE_PO, SHOW_LIST, SHOW_SETTINGS, SAVE_SETTINGS } from './action';
import Data from './data';

function initilizeState() {
    let dataProvider = new Data();
    let initialState = {
        // toolbar state
        title: 'Parking Offenders',
        actions: [],
        showBackButton: false,
        scene: SHOW_LIST,

        // routing state
        previousRoute: 'list',
        currentRoute: 'list',

        // settings state
        settings: {},

        // list state
        parkingOffenderFilter: 'ALL',
        parkingOffenderFilters: ['ALL', 'SENDED', 'NOT_SENDED'],
        parkingOffenders: dataProvider.getParkingOffenders(),

        // edit/show state
        parkingOffender: {}
    }

    return initialState;
}

function parkingOffenderApp(state = initilizeState(), action) {
    // For now, don’t handle any actions
    // and just return the state given to us.
    let newState = {};
    switch (action.type) {
        case SHOW_LIST:
            Object.assign(newState, state, {
                title: 'Parking Offenders',
                actions: [actions.filter, actions.settings],
                showBackButton: false,
                scene: SHOW_LIST
            });
            break;
        case SHOW_PO:
            Object.assign(newState, state, { 
                title: action.data.title,
                actions: [actions.delete, actions.edit],
                parkingOffender: action.data,
                showBackButton: true,
                scene: SHOW_PO
            });
            break;
        default:
            newState = state;
    }

    console.log(newState);
    return newState
}

const actions = {
    filter: {
        title: 'Filter',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    save: {
        title: 'Save',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    cancel: {
        title: 'Cancel',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    settings: {
        title: 'Settings',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    edit: {
        title: 'Edit',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    },
    delete: {
        title: 'Delete',
        icon: {uri: ''},
        show: 'always',
        showWithText: false
    }
}

export default parkingOffenderApp;