import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const DescriptionList = props => {
  const { bodyType, fuel, engine, color, transmission } = props;
  return (
    <List horizontal>
      <List.Item>
        <List.Content>
          <List.Header>Body type:</List.Header>
          <List.Description>{bodyType || <>&mdash;</>}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Engine:</List.Header>
          <List.Description>{(engine && engine + ' L') || <>&mdash;</>}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Transmission:</List.Header>
          <List.Description>{transmission || <>&mdash;</>}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Fuel:</List.Header>
          <List.Description>{fuel || <>&mdash;</>}</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Color:</List.Header>
          <List.Description>{color || <>&mdash;</>}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

DescriptionList.propTypes = {
  bodyType: PropTypes.string,
  fuel: PropTypes.string,
  engine: PropTypes.string,
  color: PropTypes.string,
  transmission: PropTypes.string
};

export default DescriptionList;
