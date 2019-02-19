import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  children: ReactChild
}

function Text(props: Props & WithStylesProps) {
  return (
    <p {...css(props.styles.text)}>{props.children}</p>
  );
}

export default withStyles((theme: typeof Theme) => ({
  text: {
    fontSize: theme.size.detailText,
    textAlign: `center`,
    margin: 0,
    padding: 0,
    fontWeight: 300
  },
}))(Text);
