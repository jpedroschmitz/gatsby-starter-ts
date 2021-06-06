import React from 'react';
import { BaseComponentProps } from '@/types';

export interface TitleProps extends BaseComponentProps {
  testId?: string;
}

const titleDefaultProps: Pick<TitleProps, 'testId'> = {
  testId: undefined,
};

const Title: React.FC<TitleProps> = (props) => {
  const { children, testId } = props;

  return <h1 data-testid={testId}>{children}</h1>;
};

Title.defaultProps = titleDefaultProps;

export default Title;
