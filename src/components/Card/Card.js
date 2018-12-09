import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CarCard extends Component {
    static propTypes = {
        car: PropTypes.object
    };

    static defaultProps ={
        car: null
    };

    editCar = () => {};

    render() {
        const car = this.props;

        return (
            <Card>
                <Image src={car.img} />
                <Card.Content>
                    <Card.Header>
                        <span>{car.brand} {car.model}</span>
                        <Icon name='edit' onClick={this.editCar}/>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>{car.year}</span>
                    </Card.Meta>
                    <Card.Description>
                        <ul>
                            <li>bodyType: {car.bodyType}</li>
                            <li>fuel: {car.fuel}</li>
                            <li>engine: {car.engine}</li>
                            <li>color: {car.color}</li>
                            <li>transmission: {car.transmission}</li>
                        </ul>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={'/cars/' + car.id}>
                        <Icon name='list layout' />
                        service info
                    </Link>
                </Card.Content>
            </Card>
        )
    }
}

export default CarCard;