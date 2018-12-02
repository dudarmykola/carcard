import React from 'react'
import {Card} from 'semantic-ui-react';
import CarCard from '../../components/Card';

const CarCardGroup = ({cars}) => (
    <Card.Group>
        { cars.map(car => (
            <CarCard {...car} />
        ))
        }
    </Card.Group>
);

export default CarCardGroup;