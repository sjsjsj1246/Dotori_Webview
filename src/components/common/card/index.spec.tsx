import { render } from '@test';

import { Card } from './index';

describe('Wrapper component test', () => {
  const component = render(<Card />);

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
