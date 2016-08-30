import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { showPO, editPO, showSettings } from '../action';
import POList from '../components/POList';

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
    onShowPo: (po) => {
      dispatch(showPO(po));
      Actions.show({title: po.title});
    }
  }
}

const VisibleParkingOffenderList = connect(
  mapStateToProps,
  mapDispatchToProps
)(POList);

export default VisibleParkingOffenderList