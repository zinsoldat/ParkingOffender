import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { showPO, editPO, showSettings } from '../../action';
import POList from './POList';

const getVisibleParkingOffenders = (parkingOffenders, filter = 'ALL') => {
    let filteredParkingOffenders = [];

    switch (filter) {
        case 'SENDED':
            //filteredParkingOffenders = parkingOffenders.filtered('sended.status == %0', true);
            filteredParkingOffenders = parkingOffenders.filter((po) => {
                return po.sended.status;
            });

            break;

        case 'NOT SENDED':
            //filteredParkingOffenders = parkingOffenders.filtered('sended.status == %0', false);
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
  console.log(state);
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