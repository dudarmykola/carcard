import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapStateToProps)(App);
