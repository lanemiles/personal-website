import React from 'react';

type Props = {
  height: number
}

export default function VerticalSpacing(props: Props) {
  return (
    <div style={{height: props.height}} />
  );
}

