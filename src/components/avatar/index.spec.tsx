import { render } from '@test';

import { Avatar } from './index';

describe('Avatar component test', () => {
  it('renders without crashing', () => {
    const component = render(<Avatar src="" onClick={() => undefined} />);

    expect(component).toBeTruthy();
  });
});
