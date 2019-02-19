import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  children: ReactChild;
}

function Card(props: Props & WithStylesProps) {
  return (
    <div {...css(props.styles.card)}>
      {props.children}
    </div>
  );
}

export default withStyles((theme: typeof Theme) => ({
  card: {
    height: `400px`,
    width: `825px`,
    display: `flex`,
    justifyContent: `space-between`
  }
}))(Card);
