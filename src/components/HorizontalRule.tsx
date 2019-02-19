import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {}

function HorizontalRule(props: Props & WithStylesProps) {
  return (
    <hr {...css(props.styles.hr)}></hr>
  );
}

export default withStyles((theme: typeof Theme) => ({
  hr: {
    height: '100%',
    margin: 0,
    padding: 0
  }
}))(HorizontalRule);
