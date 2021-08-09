import React from 'react';
import { render } from '@testing-library/react';
import A from '.';

describe('A', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<A />);
    expect(container).toMatchSnapshot();
  });
});
