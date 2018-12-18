import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Container, Form, Button, Icon, Table, Message } from 'semantic-ui-react';

class Car extends Component {
  static propTypes = {
    details: PropTypes.object
  };

  state = {
    newDetails: [],
    errorMessage: {
      km: '',
      description: ''
    }
  };

  renderDetails (details) {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>kilometrage/mileage</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
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

  handleAddNewInput () {
    this.setState({
      newDetails: [ ...this.state.newDetails, '' ]
    });
  }

  handleRemoveNewInput (index) {
    this.state.newDetails.splice(index, 1);
    this.setState({
      newDetails: this.state.newDetails
    });
  }

  handleChangeDetail (e, index) {
    this.state.newDetails[index] = e.target.value;
    this.setState({
      newDetails: this.state.newDetails
    });
  }

  handleSubmitNewDetail (e) {}

  render () {
    const { details } = this.props;

    const detailsList = !isLoaded(details)
      ? 'Loading'
      : isEmpty(details)
        ? 'Details list is empty'
        : this.renderDetails(details);

    return (
      <Container>
        <Form onSubmit={e => this.handleSubmitNewDetail(e)}>
          <Form.Group>
            <div>
              <Form.Input fluid label='kilometrage/mileage' placeholder='km/mi' />
              <Message
                hidden={!this.state.errorMessage.km}
                size='small'
                content={this.state.errorMessage.km}
                negative
              />
            </div>
            <div>
              <Button icon onClick={e => this.handleAddNewInput(e)}>
                <Icon name='plus' />
              </Button>
            </div>
            <Form.Group grouped>
              {
                this.state.newDetails.map((newDetail, i) => {
                  return (
                    <Form.Group key={i} grouped>
                      <Form.Group>
                        <Form.Input
                          value={newDetail}
                          onChange={e => this.handleChangeDetail(e, i)}
                        />
                        <Icon name='remove' onClick={() => this.handleRemoveNewInput(i)} />
                      </Form.Group>
                      <Message
                        hidden={!this.state.errorMessage.description}
                        size='small'
                        content={this.state.errorMessage.description}
                        negative
                      />
                    </Form.Group>
                  );
                })
              }
            </Form.Group>
          </Form.Group>
          <Form.Button type='submit'>Add</Form.Button>
        </Form>
        <div>
          { detailsList }
        </div>
      </Container>
    );
  }
}

export default Car;
