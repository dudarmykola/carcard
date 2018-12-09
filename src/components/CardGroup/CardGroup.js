import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Card} from 'semantic-ui-react';
import CarCard from '../../containers/CardCard';
import AddCar from '../../containers/AddCar';

class CarCardGroup extends Component {

    static propTypes = {
        cars: PropTypes.arrayOf(
            PropTypes.shape({
                id:           PropTypes.string.isRequired,
                fuel:         PropTypes.string,
                year:         PropTypes.number,
                brand:        PropTypes.string.isRequired,
                model:        PropTypes.string.isRequired,
                color:        PropTypes.string,
                engine:       PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]),
                bodyType:     PropTypes.string,
                transmission: PropTypes.string,
            }).isRequired
        ).isRequired
    };

    static defaultProps = {
        cars: []
    };

    render() {
        const { cars } = this.props;

        return (
            <div>
                <AddCar />
                { !cars
                    ? 'Loading...'
                    : <Card.Group>
                        {cars.map((car) => (
                            <CarCard key={car.id} {...car} />
                        ))
                        }
                    </Card.Group>
                }
            </div>
        )
    }
}

export default CarCardGroup;