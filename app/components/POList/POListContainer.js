import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { showPO, editPO, showSettings } from '../../action';
import POList from './POList';

const getVisibleParkingOffenders = (parkingOffenders, filter = 'ALL') => {
    let filteredParkingOffenders = [];

    switch (filter) {
        case 'SENDED':
            filteredParkingOffenders = parkingOffenders.filter((po) => {
                return po.sended.status;
            });

            break;

        case 'NOT SENDED':
            filteredParkingOffenders = parkingOffenders.filter((po) => {
                return !po.sended.status;
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