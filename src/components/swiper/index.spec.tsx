import { render } from '@test';

import { Swiper } from './index';

describe('Swiper component test', () => {
  it('renders without crashing', () => {
    const component = render(<Swiper />);

    expect(component).toBeTruthy();
  });
});
