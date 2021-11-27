import React from 'react';
import { BaseComponentProps } from '@/types';

export default function Title(props: BaseComponentProps) {
  const { children } = props;

  return <h1>{children}</h1>;
}
