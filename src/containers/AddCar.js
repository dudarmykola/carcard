import { connect } from 'react-redux';
import { addCar, openModal, closeModal } from '../actions/carsActions';
import AddCar from '../components/AddCar';

const mapStateToProps = state => {
  return {
    open: state.carsReducer.open
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCar: (uid, car) => dispatch(addCar(uid, car)),
    openModal: open => dispatch(openModal(open)),
    closeModal: open => dispatch(closeModal(open))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
