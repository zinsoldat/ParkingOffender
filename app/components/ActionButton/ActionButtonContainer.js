import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { showPO, editPO, showSettings } from '../../action';
import ActionButton from './ActionButton';

const mapStateToProps = (state) => {
    return {
        parkingOffender: state.parkingOffender,
        title: state.title,
        actions: state.actions,
        backButton: state.backButton,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => {
            dispatch(editPO({}));
            Actions.edit({});
        }
    }
}

const ActionButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionButton);

export default ActionButtonContainer