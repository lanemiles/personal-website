import React, { ReactChild } from 'react';
import { withStyles, css, WithStylesProps } from '../withStyles';
import Theme from '../theme';

type Props = {
  children: ReactChild
}

function Header(props: Props & WithStylesProps) {
  return (
    <h1 {...css(props.styles.header)}>{props.children}</h1>
  );
}

export default withStyles((theme: typeof Theme) => ({
  header: {
    fontSize: theme.size.header,
    color: theme.color.primary,
    margin: 0,
    padding: 0,
    fontWeight: 900
  }
}))(Header);
