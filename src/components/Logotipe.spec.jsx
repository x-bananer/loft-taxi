import React from 'react';
import { Logo } from './Logo';
import { render } from '@testing-library/react';

describe("Logo", () => {
  it("renders correctly", () => {
    const { container } = render(<Logo />);
    expect(container.innerHTML).toMatch("Loft Taxi")
  });
});