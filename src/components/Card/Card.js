import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DescriptionList from '../../components/DescriptionList';
import { Item, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Card.scss';

class CarCard extends Component {
  static propTypes = {
    car: PropTypes.object,
    match: PropTypes.object
  };

  render () {
    const { car, match } = this.props;

    return (
      <Item>
        <Item.Image src={car.img || `${process.env.PUBLIC_URL}/images/default/def-image.png`} />
        <Item.Content>
          <Item.Header as='a'>{car.brand} {car.model}</Item.Header>
          <Item.Meta>
            <span className='year'>{car.year}</span>
          </Item.Meta>
          <Item.Description>
            <DescriptionList {...car} />
          </Item.Description>
          <Item.Extra>
            <Link to={match.url + car.id + '/car/'}>
              <Button content='Service history' icon='right chevron' labelPosition='right' floated='right' />
            </Link>
            {
              car.color && (
                <Label color={car.color !== 'white' ? car.color : null} horizontal>
                  {car.color}
                </Label>
              )
            }
            {
              car.bodyType && (
                <Label className='body-type' image>
                  <img className='body-type__image' src={`${process.env.PUBLIC_URL}/images/body/${car.bodyType}.svg`} />
                  <span className='body-type__desc'>{car.bodyType}</span>
                </Label>)
            }
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default CarCard;
