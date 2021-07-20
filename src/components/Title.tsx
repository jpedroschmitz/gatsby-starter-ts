import React from 'react';
import { BaseComponentProps } from '@/types';

const Title: React.FC<BaseComponentProps> = (props) => {
  const { children } = props;

  return <h1>{children}</h1>;
};

export default Title;
