import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CarCardGroup from '../components/CardGroup';

const mapStateToProps = (state) => {
    return {
        cars: state.firestore.ordered.cars
    }
};

export default compose(
    firestoreConnect([
        { collection: 'cars' }
    ]),
    connect(mapStateToProps, null)
)(CarCardGroup);