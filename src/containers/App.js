import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapStateToProps)(App);
