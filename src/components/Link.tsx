import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  href: string
  children: ReactChild
}

function Link(props: Props & WithStylesProps) {
  return (
    <a {...css(props.styles.link)} href={props.href} target="_blank">{props.children}</a>
  );
}

export default withStyles((theme: typeof Theme) => ({
  link: {
    fontSize: theme.size.detailText,
    textAlign: `center`,
    margin: 0,
    padding: 0,
    fontWeight: 300,
    paddingBottom: 2,
    borderBottom: '1px solid black',
    color: `black`,
    textDecoration: `none`,
    ':hover': {
      color: theme.color.primary
    }
  },
}))(Link);
