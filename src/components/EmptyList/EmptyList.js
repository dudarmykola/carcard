import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Segment } from 'semantic-ui-react';
import './EmptyList.scss';

const EmptyList = ({ text }) => {
  return (
    <Segment className='empty-list-container' placeholder>
      <Header icon>
        <Icon name='search' />
        {text} is empty
      </Header>
    </Segment>
  );
};

EmptyList.propTypes = {
  text: PropTypes.string
};

export default EmptyList;

