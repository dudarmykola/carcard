import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCars } from './actions/actions';
import axios from 'axios';

import Menu from './components/Menu';

import { Container } from 'semantic-ui-react';

import CarCardGroup from './components/CardGroup';

class App extends Component {
  componentDidMount() {
    const { setCars } = this.props;

    axios.get('/cars.json').then(({data}) => {
        setCars(data.data);
    })
  }

  render() {
    const { cars, isReady } = this.props;
    return (
        <Container>
            <Menu />
                { !isReady
                    ? 'Loading'
                    :  <CarCardGroup cars={cars}/>
                }
        </Container>
    );
  }
}
const mapStateToProps = ({cars}) => ({
    cars: cars.items,
    isReady: cars.isReady
});

const mapDispatchToProps = dispatch => ({
    setCars: cars => dispatch(setCars(cars))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
