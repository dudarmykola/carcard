import { connect } from 'react-redux';
import { Switch } from 'react-router';

const mapStateToProps = state => ({
  location: state.routing.location
});

export default connect(mapStateToProps)(Switch);
