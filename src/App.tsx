import React, { Component,  } from 'react';
import Wrapper from './components/Wrapper';
import WelcomeBlock from './components/WelcomeBlock';
import DetailsBlock from './components/DetailsBlock';
import Card from './components/Card';
import HorizontalRule from './components/HorizontalRule';

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <Wrapper>
          <Card>
            <WelcomeBlock />
            <HorizontalRule />
            <DetailsBlock />
          </Card>
      </Wrapper>
    );
  }
}