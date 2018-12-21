import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Input, Radio, Select, Message } from 'semantic-ui-react';
import {
  OPTIONS_BODY,
  OPTIONS_COLOR,
  OPTIONS_FUEL,
  OPTIONS_LAYOUT,
  OPTIONS_TRANSMISSION,
  OPTIONS_YEAR
} from '../../constants/car';
import './AddCar.scss';

const defaultState = {
  car: {
    fuel: null,
    year: null,
    brand: null,
    model: null,
    color: null,
    engine: null,
    bodyType: null,
    transmission: null
  },
  errors: {
    brand: '',
    model: ''
  }
};

class AddCar extends Component {
  static propTypes = {
    addCar: PropTypes.func,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    uid: PropTypes.string,
    open: PropTypes.bool
  };

  constructor (props) {
    super(props);

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.validate = this.validate.bind(this);
    this.handleAddCar = this.handleAddCar.bind(this);

    this.state = defaultState;
    this.state.open = false;
  }

  show (size) {
    this.props.openModal();
    this.setState({
      size
    });
  }

  close () {
    this.props.closeModal();
    this.setState({
      ...defaultState
    });
  };

  validate () {
    let brand = '';
    let model = '';

    if (!this.state.car.brand) {
      brand = 'this field is required';
    } else if (this.state.car.brand.length > 120) {
      brand = 'max length 120';
    }

    if (!this.state.car.model) {
      model = 'this field is required';
    } else if (this.state.car.model.length > 120) {
      model = 'max length 120';
    }

    if (brand || model) {
      this.setState({
        errors: {
          brand: brand,
          model: model
        }
      });
      return false;
    }

    return true;
  }

  handleAddCar () {
    const isValid = this.validate();

    if (isValid) {
      const newCar = Object.assign({}, this.state.car);
      this.props.addCar(this.props.uid, newCar);
    }
  };

  handleChange = (e, { value, inputname }) => {
    (this.state.car.brand !== value) &&
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [ inputname ]: value
      }
    }));
  };

  render () {
    const { size } = this.state;
    const open = this.props.open;

    return (
      <>
        <Button
          color='teal'
          content='Add car'
          icon='add'
          labelPosition='left'
          onClick={() => this.show('small')}
        />
        <Modal size={size} open={open} onClose={this.close} className='add-car-modal'>
          <Modal.Header className='add-car-modal__header'>Vehicle identification</Modal.Header>
          <Modal.Content className='add-car-modal__content'>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Input}
                  label='Brand'
                  placeholder='Brand'
                  inputname='brand'
                  onChange={this.handleChange}
                />
                <Message
                  hidden={!this.state.errors.brand}
                  size='small'
                  content={this.state.errors.brand}
                  negative
                />
                <Form.Field
                  control={Input}
                  label='Model'
                  placeholder='Model'
                  inputname='model'
                  onChange={this.handleChange}
                />
                <Message
                  hidden={!this.state.errors.model}
                  size='small'
                  content={this.state.errors.model}
                  negative
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  control={Select}
                  clearable
                  label='Body Type'
                  options={OPTIONS_BODY}
                  inputname='bodyType'
                  onChange={this.handleChange}
                  placeholder='Choose'
                />
                <Form.Field
                  control={Select}
                  clearable
                  label='Year'
                  options={OPTIONS_YEAR}
                  inputname='year'
                  onChange={this.handleChange}
                  placeholder='Choose'
                />
                <Form.Field
                  control={Select}
                  clearable
                  label='Layout'
                  options={OPTIONS_LAYOUT}
                  inputname='layout'
                  onChange={this.handleChange}
                  placeholder='Choose'
                />
              </Form.Group>
              <Form.Group inline>
                <Form.Field
                  control={Input}
                  type='number'
                  max='12'
                  min='1'
                  step='0.1'
                  label='Engine'
                  inputname='engine'
                  onChange={this.handleChange}
                  placeholder='Choose'
                />
                <Form.Field
                  control={Select}
                  clearable
                  label='Color'
                  options={OPTIONS_COLOR}
                  inputname='color'
                  onChange={this.handleChange}
                  placeholder='Choose'
                />
              </Form.Group>
              <Form.Group inline>
                <label>Transmission</label>
                {
                  OPTIONS_TRANSMISSION.map(typeTransmission => (
                    <Form.Field
                      key={typeTransmission.key}
                      control={Radio}
                      label={typeTransmission.text}
                      value={typeTransmission.value}
                      inputname='transmission'
                      checked={this.state.car.transmission === typeTransmission.value}
                      onChange={this.handleChange}
                    />
                  ))
                }
              </Form.Group>
              <Form.Group inline>
                <label>Fuel</label>
                {
                  OPTIONS_FUEL.map(typeFuel => (
                    <Form.Field
                      key={typeFuel.key}
                      control={Radio}
                      label={typeFuel.text}
                      value={typeFuel.value}
                      inputname='fuel'
                      checked={this.state.car.fuel === typeFuel.value}
                      onChange={this.handleChange}
                    />
                  ))
                }
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} content='Cancel' negative />
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.handleAddCar} />
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default AddCar;
