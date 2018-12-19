import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './SignIn.scss';

class SignIn extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    authError: PropTypes.string,
    signIn: PropTypes.func.isRequired
  };

  state = {
    email: '',
    password: ''
  };

  handleChange = (e, { id, value }) => {
    this.setState({
      [id]: value
    });
  };

  handleSubmit = () => {
    this.props.signIn(this.state);
  };

  render () {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to={'User/' + auth.uid + '/Cars/'} />;

    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Log-in to your account
            </Header>
            <Form
              size='large'
              onSubmit={this.handleSubmit}
            >
              <Segment stacked>
                <Form.Input
                  id='email'
                  fluid
                  icon='user'
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
                { authError && (
                  <Message negative>
                    <p>{authError}</p>
                  </Message>
                )}
                <Button color='teal' fluid size='large' type='submit'>Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to={'/SignUp'}>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
