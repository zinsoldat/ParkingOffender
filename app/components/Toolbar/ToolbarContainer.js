import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { 
    showPO, 
    editPO, 
    showList,
    savePO,
    SAVE_PO, 
    SEND_PO, 
    SHOW_PO, 
    EDIT_PO, 
    DELETE_PO, 
    SHOW_LIST, 
    SHOW_SETTINGS, 
    SAVE_SETTINGS, 
    ACTION_SELECTED 
} from '../../action';
import Toolbar from './Toolbar';

const mapStateToProps = (state) => {
    return {
        parkingOffender: state.parkingOffender,
        title: state.title,
        actions: state.actions,
        showBackButton: state.showBackButton,
        scene: state.scene
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBack: function onBack(source) {
            switch(source) {
                case SHOW_LIST:
                    dispatch(showList());
                    break;
                default:
                    dispatch(showList());
                    break;
            }
            Actions.pop();
        },
        onActionSelected: function onActionSelected(position) {
            console.log(this);
            let action = this.actions[position].key;
            console.log(action);
            switch(action){
                case SAVE_PO:
                    //dispatch(savePO());
                    break;
            }
        }
    }
}

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer