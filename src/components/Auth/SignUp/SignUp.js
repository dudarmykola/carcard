import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class SignUp extends Component {
  static propTypes = {
    signUp: PropTypes.func.isRequired,
    authError: PropTypes.string,
    auth: PropTypes.object
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = (e, { id, value }) => {
    this.setState({
      [id]: value
    });
  };

  handleSubmit = () => {
    this.props.signUp(this.state);
  };

  render () {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to={'User/' + auth.uid + '/Cars/'} />;

    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column className='login-form__container'>
            <Header as='h2' color='teal' textAlign='center' className='login-form__title'>
              <Image src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} /> Registration
            </Header>
            <Form
              size='large'
              onSubmit={this.handleSubmit}
            >
              <Segment stacked>
                <Form.Input
                  id='firstName'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='First name'
                  onChange={this.handleChange}
                />
                <Form.Input
                  id='lastName'
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Last name'
                  onChange={this.handleChange}
                />
                <Form.Input
                  id='email'
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  onChange={this.handleChange}
                />
                <Form.Input
                  id='password'
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
                {authError && (
                  <Message negative>
                    <p>{authError}</p>
                  </Message>
                )}
                <Button color='teal' fluid size='large' type='submit'>Sign up</Button>
              </Segment>
            </Form>
            <Message>
              <Link to={'/SignIn'}>Sign In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  };
};

export default SignUp;
