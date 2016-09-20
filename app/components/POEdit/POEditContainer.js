import { connect } from 'react-redux';
import { showPO, updatePO, editPO, showSettings } from '../../action';
import POEdit from './POEdit';
import uuid from '../../util/uuid';

function getNewParkingOffender() {
  return {
    parkingOffenderID: uuid(),
    licensePlate: '',
    comment: '',
    witness: '',
    address: {
      zipCode: '',
      city: '',
      street: '',
      streetNumber: ''
    },
    date: new Date(),
    image: undefined,
    sended: {
      status: false,
      mail: '',
      date: {}
    }
  };
}

const mapStateToProps = (state) => {
  let parkingOffender = state.parkingOffender;
  if (!Object.keys(parkingOffender).length) {
    parkingOffender = getNewParkingOffender();
  }
  
  return {
    parkingOffender: parkingOffender
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLiveChange: function onLiveChange(po) {
      dispatch(updatePO(po))
    }
  }
}

const EditParkingOffender = connect(
  mapStateToProps,
  mapDispatchToProps
)(POEdit);

export default EditParkingOffender