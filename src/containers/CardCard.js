import { connect } from 'react-redux';
import CarCard from '../components/Card';
import {editCar} from "../actions/cars";

const mapDispatchToProps = dispatch => {
    return {
        editCar: car => dispatch(editCar(car))
    }
};

export default connect(null, mapDispatchToProps)(CarCard)