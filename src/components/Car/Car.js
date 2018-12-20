import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Container, Form, Button, Icon, Table, Message, Segment } from 'semantic-ui-react';
import './Car.scss';

const initialState = {
  km: '',
  description: [],
  errorKm: '',
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
      <Table celled className='details-table'>
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
                  <div key={j}>{keyInside}</div>
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

  handleRemoveNewInput (index) {
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

    if (errorKm || this.validateArray(errorDescription)) {
      this.setState({
        errorKm,
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
      ? 'Loading'
      : isEmpty(details)
        ? 'Details list is empty'
        : this.renderDetails(details);

    return (
      <Container>
        <Segment>
          <Form onSubmit={this.handleSubmitNewDetail}>
            <Form.Group>
              <div>
                <Form.Input
                  fluid
                  label='kilometrage/mileage'
                  placeholder='km/mi'
                  value={this.state.km}
                  onChange={this.handleChange}
                />
                <Message
                  hidden={!this.state.errorKm}
                  size='small'
                  content={this.state.errorKm}
                  negative
                />
              </div>
              <div>
                <Button icon onClick={e => this.handleAddNewInput(e)}>
                  <Icon name='plus' title='add description' />
                </Button>
              </div>
              <Form.Group grouped>
                {
                  this.state.description.map((newDetail, i) => {
                    return (
                      <Form.Group key={i} grouped>
                        <Form.Group>
                          <Form.Input
                            value={newDetail}
                            onChange={e => this.handleChangeDetail(e, i)}
                          />
                          <Icon name='remove' onClick={e => this.handleRemoveNewInput(i)} />
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
            <Form.Button type='submit'>Add service record</Form.Button>
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
