import { render, screen } from '@testing-library/react';

import Title from '@/components/Title';

describe(`Title`, () => {
  it(`renders a Title component`, () => {
    render(<Title>Test Title</Title>);

    expect(screen.getByText(`Test Title`)).toBeInTheDocument();
  });
});
