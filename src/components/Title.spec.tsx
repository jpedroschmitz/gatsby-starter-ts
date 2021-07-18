import React from 'react';

import { render, screen } from '@testing-library/react';

import Title from './Title';

describe(`Title`, () => {
  it(`renders a Title component`, () => {
    render(<Title>Test Title</Title>);

    expect(screen.getByText(`Test Title`)).toBeInTheDocument();
  });
});
