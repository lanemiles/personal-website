import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  color: "black" | "gray" | "blue"
  weight: 300 | 700,
  children: ReactChild
}

function BigText(props: Props & WithStylesProps) {
  let textClass;
  switch(props.color) {
    case "gray":
      textClass = props.styles.gray;
      break;
    case "black":
      textClass = props.styles.black;
      break;
    default:
      textClass = props.styles.blue;
  }

  let fontWeight;
  switch(props.weight) {
    case 300:
      fontWeight = props.styles.three;
      break;
    default:
      fontWeight = props.styles.seven;
  }

  return (
    <p {...css(props.styles.bigText, textClass, fontWeight)}>{props.children}</p>
  );
}

export default withStyles((theme: typeof Theme) => ({
  bigText: {
    textAlign: `center`,
    margin: 0,
    padding: 0
  },
  black: {
    color: `black`
  },
  gray: {
    color: theme.color.secondary
  },
  blue: {
    color: theme.color.primary
  },
  three: {
    fontWeight: 300,
    fontSize: theme.size.bigText,
  },
  seven: {
    fontWeight: 700,
    fontSize: 65
  },

}))(BigText);
