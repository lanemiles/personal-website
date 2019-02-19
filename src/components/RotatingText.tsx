import React from 'react';
import BigText from './BigText';
import ReactRotatingText from 'react-rotating-text';
import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

type Props = {
  items: string[];
  loading: boolean;
  error: any;
};

export default class RotatingText extends React.Component<Props> {

  render() {

    if (this.props.loading || this.props.error !== undefined) {
      return <Loader />
    }

    return (
      <BigText color={'blue'} weight={300}>
        <ReactRotatingText items={this.props.items} />
      </BigText>
    );
  }
}
