import { connect } from 'react-redux';
import { compose } from 'redux';
import CarCardGroup from '../components/CardGroup';
import { firestoreConnect } from 'react-redux-firebase';

const userCollectionRedux = 'userCars';

const mapStateToProps = (state, ownProps) => {
  return {
    uid: ownProps.match.params.id,
    cars: state.firestoreReducer.data[userCollectionRedux]
  };
};

export default compose(
  firestoreConnect(props => (
    [ { collection: props.match.params.id,
      storeAs: userCollectionRedux } ]
  )),
  connect(mapStateToProps, null)
)(CarCardGroup);

