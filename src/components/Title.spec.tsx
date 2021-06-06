import React from 'react';

import { render, RenderResult, screen } from '@testing-library/react';

import Title, { TitleProps } from './Title';

function renderTitle(props: Partial<TitleProps> = {}): RenderResult {
  return render(<Title testId="title">{props.children}</Title>);
}

describe(`Title`, () => {
  it(`renders a Title component`, () => {
    renderTitle();

    expect(screen.getByTestId(`title`)).toBeInTheDocument();
  });

  it(`renders text children`, () => {
    renderTitle({ children: `Test Title` });

    expect(screen.getByTestId(`title`)).toHaveTextContent(`Test Title`);
  });

  it(`renders component children`, () => {
    renderTitle({ children: <span data-testid="title-inner-span" /> });

    expect(screen.getByTestId(`title-inner-span`)).toBeInTheDocument();
  });
});
