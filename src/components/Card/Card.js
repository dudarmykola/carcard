import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

class CarCard extends Component {
    static propTypes = {
        img:          PropTypes.string,
        fuel:         PropTypes.string,
        year:         PropTypes.number,
        brand:        PropTypes.string.isRequired,
        color:        PropTypes.string.isRequired,
        model:        PropTypes.string.isRequired,
        engine:       PropTypes.number,
        bodyType:     PropTypes.string,
        transmission: PropTypes.string,
    };

    render() {
        const {
            img,
            fuel,
            year,
            brand,
            color,
            model,
            engine,
            bodyType,
            transmission,
        } = this.props;

        return (
            <Card>
                <Image src={img} />
                <Card.Content>
                    <Card.Header>{brand} {model}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{year}</span>
                    </Card.Meta>
                    <Card.Description>
                        <ul>
                            <li>bodyType: {bodyType}</li>
                            <li>fuel: {fuel}</li>
                            <li>engine: {engine}</li>
                            <li>color: {color}</li>
                            <li>transmission: {transmission}</li>
                        </ul>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='list layout' />
                        service info
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default CarCard;