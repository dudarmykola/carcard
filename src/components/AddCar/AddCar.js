import React, { Component } from 'react'
import { addCar } from '../../actions/cars';
import { Button, Modal, Form, Input, Radio, Select } from 'semantic-ui-react';
import {
    OPTIONS_BODY,
    OPTIONS_COLOR,
    OPTIONS_FUEL,
    OPTIONS_LAYOUT,
    OPTIONS_TRANSMISSION,
    OPTIONS_YEAR
} from "../../constants/car";

const defaultState = {
    open: false,
    car: {
        fuel: null,
        year: null,
        brand: null,
        model: null,
        color: null,
        engine: null,
        bodyType: null,
        transmission: null,
    }
};

class AddCar extends Component {
    state = defaultState;

    show = size => () => {
        this.setState({
            size,
            open: true
        });
    };

    close = () => {
        this.setState(defaultState);
    };

    handleAddCar = () => {
        const newCar = Object.assign({}, this.state.car);
        newCar.year = parseInt(this.state.car.year, 0)
        newCar.engine = parseInt(this.state.car.engine).toFixed(1);
        this.props.dispatch(addCar(newCar));
    };

    handleChange = (e, { value, inputname }) => {
        (this.state.car.brand !== value) &&
        this.setState( prevState  => ({
            car: {
                ...prevState.car,
                [inputname]: value
            }
        }))
    };

    render() {
        const { open, size } = this.state;

        return (
            <>
                <Button onClick={this.show('small')}>Add car</Button>
                <Modal size={size} open={open} onClose={this.close}>
                    <Modal.Header>Add car to your account</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Input}
                                    label='Brand'
                                    placeholder='Brand'
                                    inputname='brand'
                                    onChange={this.handleChange}
                                />
                                <Form.Field
                                    control={Input}
                                    label='Model'
                                    placeholder='Model'
                                    inputname='model'
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group >
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
                                    type='Number'
                                    label='Engine'
                                    inputname='engine'
                                    placeholder='l'
                                    onChange={this.handleChange}
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
                                    OPTIONS_TRANSMISSION.map( typeTransmission => (
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
                                    OPTIONS_FUEL.map( typeFuel => (
                                        <Form.Field
                                            key={typeFuel.key}
                                            control={Radio}
                                            label={typeFuel.text}
                                            value= {typeFuel.value}
                                            inputname= 'fuel'
                                            checked={this.state.car.fuel === typeFuel.value}
                                            onChange={this.handleChange}
                                        />
                                    ))
                                }
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>No</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.handleAddCar} />
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default AddCar;