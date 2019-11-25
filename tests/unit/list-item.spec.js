import { shallowMount } from '@vue/test-utils';
import ListItem from '@/components/list/ListItem';

describe('ListItem.vue', () => {
  const props = {
    item: {
      primaryText: 'Sample Test',
      secondaryText: 'sub text'
    }
  };

  const wrapper = shallowMount(ListItem, {
    propsData: props
  });

  it('should render with defined props', () => {
    const wrapperProps = wrapper.props();
    expect(wrapperProps).toHaveProperty('item', props.item);
  });

  it('should have list-item class', () => {
    expect(wrapper.classes('list-item')).toBe(true);
  });
});
