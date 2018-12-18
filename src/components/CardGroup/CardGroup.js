import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Card } from 'semantic-ui-react';
import CarCard from '../../containers/CarCard';
import AddCar from '../../containers/AddCar';
import { isLoaded, isEmpty } from 'react-redux-firebase';

class CarCardGroup extends Component {
  static propTypes = {
    cars: PropTypes.object,
    match: PropTypes.object,
    uid: PropTypes.string
  };

  renderCars (cars) {
    return Object.keys(cars).map(key => (
      <CarCard key={key} car={Object.assign({ id: key }, cars[key])} match={this.props.match} />
    ));
  }

  render () {
    const { cars, uid } = this.props;

    const cardList = !isLoaded(cars)
      ? 'Loading'
      : isEmpty(cars)
        ? 'Cars list is empty'
        : this.renderCars(cars);

    return (
      <Container>
        <AddCar uid={uid} />
        <Card.Group>{ cardList }</Card.Group>
      </Container>
    );
  }
}

export default CarCardGroup;
