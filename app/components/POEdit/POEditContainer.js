import { connect } from 'react-redux';
import { showPO, editPO, showSettings } from '../../action';
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
  console.log(Object.keys(parkingOffender).length);
  if (!Object.keys(parkingOffender).length) {
    parkingOffender = getNewParkingOffender();
  }
  console.log(parkingOffender);

  return {
    parkingOffender: parkingOffender
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const EditParkingOffender = connect(
  mapStateToProps,
  mapDispatchToProps
)(POEdit);

export default EditParkingOffender