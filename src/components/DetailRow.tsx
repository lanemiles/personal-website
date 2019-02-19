import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';


type Props = {
  icon: any
  children: ReactChild;
}

function DetailRow(props: Props & WithStylesProps) {
  return (
    <div {...css(props.styles.detailRow)}>
      <div {...css(props.styles.icon)}>{props.icon}</div>
      <div {...css(props.styles.main)}>{props.children}</div>
    </div>
    
  );
}

export default withStyles((theme: typeof Theme) => ({
  detailRow: {
    display: `flex`,
    height: 63
  },
  icon: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  main: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    width: 300,
  }

}))(DetailRow);