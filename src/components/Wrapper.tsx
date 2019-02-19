import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  children: ReactChild;
}

function Wrapper(props: Props & WithStylesProps) {
  return (
    <div {...css(props.styles.container)}>
      {props.children}
    </div>
  );
}

export default withStyles((theme: typeof Theme) => ({
  container: {
    width: `100%`,
    height: `100vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    fontFamily: 'Lato, sans-serif'
  },
}))(Wrapper);
