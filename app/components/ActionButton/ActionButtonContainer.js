import { connect } from 'react-redux';
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
            dispatch(showPO({}));
        }
    }
}

const ActionButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionButton);

export default ActionButtonContainer