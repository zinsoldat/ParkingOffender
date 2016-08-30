import { connect } from 'react-redux';
import { showPO, editPO, showSettings } from '../action';
import POShow from '../components/POShow';


const mapStateToProps = (state) => {
  return {
    parkingOffender: state.parkingOffender
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ShowParkingOffender = connect(
  mapStateToProps,
  mapDispatchToProps
)(POShow);

export default ShowParkingOffender