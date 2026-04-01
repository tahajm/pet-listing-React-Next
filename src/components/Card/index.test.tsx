import { render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card component', () => {
  it('renders the card with name and image', () => {
    render(<Card name="Fluffy" image="/images/fluffy.jpg" />);
    expect(screen.getByAltText('Fluffy')).toBeInTheDocument();
    expect(screen.getByText('Fluffy')).toBeInTheDocument();
  });
});
