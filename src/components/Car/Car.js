import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import {
  Form,
  Icon,
  Table,
  Button,
  Loader,
  Message,
  Segment,
  Container } from 'semantic-ui-react';
import './Car.scss';
import EmptyList from '../EmptyList/EmptyList';

const initialState = {
  km: '',
  description: [ '' ],
  errorKm: '',
  errorEmpty: '',
  errorDescription: []
};

class Car extends Component {
  static propTypes = {
    details: PropTypes.object,
    addDetails: PropTypes.func,
    match: PropTypes.object,
    addDetailsError: PropTypes.string
  };

  constructor (props) {
    super(props);

    this.state = initialState;

    this.validate = this.validate.bind(this);
    this.validateArray = this.validateArray.bind(this);
    this.handleSubmitNewDetail = this.handleSubmitNewDetail.bind(this);
  }

  renderDetails (details) {
    return (
      <Table compact inverted color='teal' celled className='details-table'>
        <Table.Header className='details-table__header'>
          <Table.Row className='details-table__header__row'>
            <Table.HeaderCell width='4' className='cell'>kilometrage/mileage</Table.HeaderCell>
            <Table.HeaderCell width='12' className='cell'>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            Object.keys(details).map((key, i) => (
              <Table.Row key={i}>
                <Table.Cell>{key}</Table.Cell>
                <Table.Cell>{details[key].map((keyInside, j) => (
                  <div key={j}><Icon name='setting' /> {keyInside}</div>
                ))}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    );
  }

  handleAddNewInput (e) {
    e.preventDefault();
    this.setState({
      description: [ ...this.state.description, '' ]
    });
  }

  handleRemoveNewInput (e, index) {
    e.preventDefault();
    this.state.description.splice(index, 1);
    this.setState({
      description: this.state.description
    });
  }

  handleChangeDetail (e, index) {
    this.state.description[index] = e.target.value;
    this.setState({
      description: this.state.description
    });
  }

  handleChange = (e, { value }) => {
    (this.state.km !== value) &&
    this.setState({
      km: value
    });
  };

  isNormalInteger (str) {
    const reg = new RegExp('^[0-9]+$');
    return reg.test(str);
  }
  validateArray (arr) {
    let newArr = arr.filter(v => v !== '');
    return !!newArr.length;
  }

  validate () {
    let errorKm = '';
    let errorDescription = [];
    let errorEmpty = '';

    if (!this.isNormalInteger(this.state.km)) {
      errorKm = 'invalid number';
    }

    this.state.description.forEach(item => {
      if (item.length < 3 || item.length >= 120) {
        errorDescription.push('Min length 3 and max 120');
      } else {
        errorDescription.push('');
      }
    });

    if (this.state.description.length === 0) {
      errorEmpty = 'Add at least one description';
    }

    if (errorKm || this.validateArray(errorDescription) || errorEmpty) {
      this.setState({
        errorKm,
        errorEmpty,
        errorDescription: [ ...errorDescription ]
      });
      return false;
    }

    return true;
  }

  handleSubmitNewDetail () {
    const isValid = this.validate();

    if (isValid) {
      const newDetails = {};

      newDetails[this.state.km] = this.state.description;
      this.props.addDetails(this.props.match.params.id, this.props.match.params.carId, newDetails);
      this.setState(initialState);
    }
  }

  render () {
    const { details, addDetailsError } = this.props;

    const detailsList = !isLoaded(details)
      ? <Loader active />
      : isEmpty(details)
        ? <EmptyList text='Service history' />
        : this.renderDetails(details);

    return (
      <Container>
        <Segment>
          <Form onSubmit={this.handleSubmitNewDetail}>
            <Form.Group>
              <Form.Group className='kilometrage-wrapper' grouped>
                <Form.Group className='kilometrage-container' inline>
                  <Form.Input
                    className='kilometrage-container__input'
                    fluid
                    label='kilometrage/mileage'
                    placeholder='km/mi'
                    value={this.state.km}
                    onChange={this.handleChange}
                  />
                  <Form.Button
                    className='kilometrage-container__btn'
                    content='Add description'
                    icon='add'
                    labelPosition='left'
                    onClick={e => this.handleAddNewInput(e)}
                  />
                </Form.Group>
                <Message
                  className='error-container'
                  hidden={!this.state.errorKm}
                  size='small'
                  content={this.state.errorKm}
                  negative
                />
                <Message
                  className='error-container'
                  hidden={!this.state.errorEmpty}
                  size='small'
                  content={this.state.errorEmpty}
                  negative
                />
              </Form.Group>
              <Form.Group className='description-container' grouped>
                {
                  this.state.description.map((newDetail, i) => {
                    return (
                      <Form.Group key={i} grouped>
                        <Form.Group className='description-item' inline>
                          <Form.Input
                            value={newDetail}
                            onChange={e => this.handleChangeDetail(e, i)}
                          />
                          <Button icon='remove' onClick={e => this.handleRemoveNewInput(e, i)} />
                        </Form.Group>
                        <Message
                          hidden={!this.state.errorDescription[i]}
                          size='small'
                          content={this.state.errorDescription[i]}
                          negative
                        />
                      </Form.Group>
                    );
                  })
                }
              </Form.Group>
            </Form.Group>
            <Form.Button type='submit' color='teal'>Add service record</Form.Button>
          </Form>
        </Segment>
        { addDetailsError && (
          <Message negative>
            <p>{addDetailsError}</p>
          </Message>
        )}
        <div className='details-table-wrapper'>
          { detailsList }
        </div>
      </Container>
    );
  }
}

export default Car;
