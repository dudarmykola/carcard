import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu/index';
import CarCardGroup from '../CardGroup/index';

class App extends Component {
  componentDidMount() {
    const { onSetCars } = this.props;

    axios.get('/cars.json').then(({data}) => {
        onSetCars(data.data);
    })
  }

  render() {
    const { cars, isReady } = this.props;

    return (
        <div>
            <Container>
                <Menu />
                { !isReady
                    ? 'Loading...'
                    :  <CarCardGroup cars={cars}/>
                }
            </Container>
        </div>

    );
  }
}

export default App;
