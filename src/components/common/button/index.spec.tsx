import { fireEvent, render } from '@test';

import { Button } from './index';

describe('Button component test', () => {
  it('renders without crashing', () => {
    const component = render(<Button onClick={() => undefined} />);

    expect(component).toBeTruthy();
  });

  it('button is clickable', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Button onClick={mockFn} />);

    const btn = getByTestId('button');
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
