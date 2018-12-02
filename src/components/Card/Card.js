import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CarCard = (
    {   brand,
        model,
        img,
        year,
        bodyType,
        fuel,
        color,
        transmission,
        engine
    }) => (
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
                <Icon name='service' />
                service info
            </a>
        </Card.Content>
    </Card>
    )
;

export default CarCard;