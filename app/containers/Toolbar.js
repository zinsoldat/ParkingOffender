import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { showPO, editPO, showList, SHOW_LIST } from '../action';
import Toolbar from '../components/Toolbar';

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
        onActionSelected: function onActionSelected(action) {

        }
    }
}

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer