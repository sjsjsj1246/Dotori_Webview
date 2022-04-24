import { render } from '@test';

import { TabBar } from './';

describe('TabBar component test', () => {
  it('renders without crashing', () => {
    const component = render(
      <TabBar>
        <TabBar.Item />
      </TabBar>,
    );

    expect(component).toBeTruthy();
  });
});
