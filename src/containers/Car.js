import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Car from '../components/Car';

const detailsCollectionRedux = 'carDetails';

const mapStateToProps = state => {
  return {
    details: state.firestoreReducer.data[detailsCollectionRedux] && state.firestoreReducer.data[detailsCollectionRedux].details || {},
    auth: state.firebaseReducer.auth,
    location: state.routing.location
  };
};

export default compose(
  firestoreConnect(props => ([
    {
      collection: props.match.params.id,
      doc: props.match.params.carId,
      storeAs: detailsCollectionRedux
    } ]
  )),
  connect(mapStateToProps, null)
)(Car);

