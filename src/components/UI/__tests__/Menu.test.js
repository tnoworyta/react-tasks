import toJson from 'enzyme-to-json';

import Menu from '../Menu';

describe('<Menu />', () => {
  const defaultProps = { title: 'Some title' };
  const setup = buildSetup(Menu, defaultProps);

  test('renders component', () => {
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders with correct elements', () => {
    const wrapper = setup({ title: 'Some other title' });
    expect(wrapper.find('.title')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('.title').text()).toEqual('Some other title');
  });
});
