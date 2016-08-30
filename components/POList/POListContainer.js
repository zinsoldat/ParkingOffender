import { connect } from 'react-redux';
import { showPO, editPO, showSettings } from '../../actions';
import POList from './POList';

const getVisibleParkingOffenders = (parkingOffenders, filter = 'ALL') => {
    let filteredParkingOffenders = [];

    switch (filter) {
        case 'SENDED':
            filteredParkingOffenders = parkingOffenders.filter((po) => {
                po.status.sended
            });

            break;

        case 'NOT_SENDED':
            filteredParkingOffenders = parkingOffenders.filter((po) => {
                !po.status.sended
            });
            break;

        default:
            filteredParkingOffenders = parkingOffenders;
            break;
    }

    return filteredParkingOffenders;
}


const mapStateToProps = (state) => {
  return {
    parkingOffenders: getVisibleParkingOffenders(state.parkingOffenders, state.parkingOffenderFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(showPO(id))
    }
  }
}

const VisibleParkingOffenderList = connect(
  mapStateToProps,
  mapDispatchToProps
)(POList);

export default VisibleParkingOffenderList