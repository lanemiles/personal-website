import React, { Fragment } from 'react';
import Header from './Header';
import BigText from './BigText';
import VerticalSpacing from './VerticalSpacing';
import { WithStylesProps, withStyles, css } from '../withStyles';
import Theme from '../theme';
import RotatingTextContainer from '../containers/RotatingTextContainer';

type Props = {};

function WelcomeBlock(props: Props & WithStylesProps) {
  return (
    <div {...css(props.styles.welcomeBlock)}>
      <Header>Hey There!</Header>
      <VerticalSpacing height={30} />
      <Fragment>
        <BigText color={'gray'} weight={300}>My name is </BigText>
        <BigText color={'black'} weight={700}>Lane Miles </BigText>
        <BigText color={'gray'} weight={300}>and I like to: </BigText>
        <RotatingTextContainer />
      </Fragment>
    </div>
  );
}

export default withStyles((theme: typeof Theme) => ({
  welcomeBlock: {
    height: `100%`,
    justifyContent: `center`,
    flexDirection: `column`
  }
}))(WelcomeBlock);