import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  src: string
  children: ReactChild;
}

function Icon(props: Props & WithStylesProps) {
  return (
    <img src={props.src} height={"55"} width={"55"}/>
  );
}

export default withStyles((theme: typeof Theme) => ({
  card: {
    height: `500px`,
    width: `900px`,
  }
}))(Icon);
