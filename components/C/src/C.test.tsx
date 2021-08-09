import React from 'react';
import { render } from '@testing-library/react';
import C from '.';

describe('C', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<C />);
    expect(container).toMatchSnapshot();
  });
});
