export const SAVE_PO = 'SAVE_PARKING_OFFENDER';
export const SEND_PO = 'SEND_PARKING_OFFENDER';
export const SHOW_PO = 'SHOW_PARKING_OFFENDER';
export const EDIT_PO = 'EDIT_PARKING_OFFENDER';
export const UPDATE_PO= 'UPDATE_PARKING_OFFENDER';
export const DELETE_PO = 'DELETE_PARKING_OFFENDER';
export const SHOW_LIST = 'SHOW_LIST';
export const SHOW_SETTINGS = 'SHOW_SETTINGS';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const ACTION_SELECTED = 'ACTION_SELECTED';


export function savePO(po) {
    return { type: SAVE_PO, data: po };
}

export function updatePO(po) {
    return { type: UPDATE_PO, data: po };
}

export function sendPO(po) {
    return { type: SEND_PO, data: po };
}

export function showPO(po) {
    return { type: SHOW_PO, data: po };
}

export function editPO(po) {
    return { type: EDIT_PO, data: po };
}

export function deletePO(po) {
    return { type: DELETE_PO, data: po };
}

export function showList(filter) {
    return { type: SHOW_LIST, data: filter};
}

export function showSettings(settings) {
    return { type: SHOW_SETTINGS, data: settings };
}

export function saveSettings(settings) {
    return { type: SAVE_SETTINGS, data: settings };
}

export function actionSelected(action) {
    return { type: ACTION_SELECTED, data: action };
}

