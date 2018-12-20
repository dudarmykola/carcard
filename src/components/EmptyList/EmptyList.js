import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import './EmptyList.scss';

const EmptyList = props => (
  <Segment className='empty-list-container' placeholder>
    <Header icon>
      <Icon name='search' />
      Card list is empty
    </Header>
  </Segment>
);

export default EmptyList;

