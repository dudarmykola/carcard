import { connect } from 'react-redux';
import { setCars } from '../actions/cars';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        cars: state.carsReducer.cars,
        isReady: state.carsReducer.isReady
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCars: cars => dispatch(setCars(cars))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)