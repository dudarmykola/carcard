import { connect } from 'react-redux';
import CarCard from '../components/Card';
import { editCar } from '../actions/carsActions';

const mapStateTProps = state => {
  return {
    location: state.routing.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCar: car => dispatch(editCar(car))
  };
};

export default connect(mapStateTProps, mapDispatchToProps)(CarCard);
