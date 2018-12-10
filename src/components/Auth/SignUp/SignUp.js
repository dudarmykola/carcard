import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

export default () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Input label='Email' placeholder='joe@schmoe.com' />
      <Form.Input label='Enter Password' type='password' />
    </Form.Group>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
    />
  </Form>
);
