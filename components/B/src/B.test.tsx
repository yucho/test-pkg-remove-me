import React from 'react';
import { render } from '@testing-library/react';
import B from '.';

describe('B', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<B />);
    expect(container).toMatchSnapshot();
  });
});
