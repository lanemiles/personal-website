import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RotatingText from '../components/RotatingText';

export default class RotatingTextContainer extends React.Component {
  render() {
    return (
      <Query
        query={gql`
          query something {
            hobbies {
              name
            }
          }
        `}
      >
      
        {({ loading, error, data }) => {
          const items = loading ? [] : data.hobbies.map(h => h.name);
          return <RotatingText loading={loading} error={error} items={items} />
        }}
      </Query>
    );
  }
}
