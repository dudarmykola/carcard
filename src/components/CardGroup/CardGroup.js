import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';
import CarCard from '../../containers/CarCard';
import AddCar from '../../containers/AddCar';

class CarCardGroup extends Component {
  static propTypes = {
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        fuel: PropTypes.string,
        year: PropTypes.number,
        brand: PropTypes.string,
        model: PropTypes.string,
        color: PropTypes.string,
        engine: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
        bodyType: PropTypes.string,
        transmission: PropTypes.string
      })
    ),
    match: PropTypes.object
  };

  render () {
    const { cars } = this.props;

    return (
      <>
        <AddCar />
        {!cars
          ? 'Loading...'
          : <Card.Group>
            {cars.map(car => (
              <CarCard key={car.id} car={car} match={this.props.match} />
            ))
            }
          </Card.Group>
        }
      </>
    );
  }
}

export default CarCardGroup;
