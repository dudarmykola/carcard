import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Card} from 'semantic-ui-react';
import CarCard from '../../components/Card';

class CarCardGroup extends Component {
    static propTypes = {
        cars: PropTypes.array.isRequired,
    };

    render() {
        const { cars } = this.props;
        return (
            <Card.Group>
                {cars.map((car, i) => (
                    <CarCard
                        key={i}
                        img={car.img}
                        fuel={car.fuel}
                        year={parseInt(car.year, 0)}
                        brand={car.brand}
                        color={car.color}
                        model={car.model}
                        engine={parseInt(car.engine, 0)}
                        bodyType={car.bodyType}
                        transmission={car.transmission}

                    />
                ))
                }
            </Card.Group>
        )
    }
}

export default CarCardGroup;