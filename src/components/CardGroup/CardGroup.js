import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Item, Segment, Loader } from 'semantic-ui-react';
import CarCard from '../../containers/CarCard';
import AddCar from '../../containers/AddCar';
import EmptyList from '../../components/EmptyList';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import './CardGroup.scss';

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
      ? <Loader active />
      : isEmpty(cars)
        ? <EmptyList text='Cars list' />
        : this.renderCars(cars);

    return (
      <Container className='card-list-wrapper'>
        <Segment className='add-car-container'>
          <AddCar uid={uid} />
        </Segment>
        <Item.Group divided className='card-list-container'>{ cardList }</Item.Group>
      </Container>
    );
  }
}

export default CarCardGroup;
