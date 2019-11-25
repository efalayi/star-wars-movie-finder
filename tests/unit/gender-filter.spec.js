import { mount } from '@vue/test-utils';
import GenderFilter from '@/components/film/GenderFilter';

describe('ListItem.vue', () => {
  const props = {
    selectedOption: 'all'
  };

  const wrapper = mount(GenderFilter, {
    propsData: props
  });

  it('should render with defined props', () => {
    const wrapperProps = wrapper.props();
    expect(wrapperProps).toHaveProperty('selectedOption', props.selectedOption);
  });

  it('should render radio buttons', () => {
    const radioButtons = wrapper.findAll('input');
    expect(radioButtons.length).toBe(3);
    expect(radioButtons.at(0).is('input[type="radio"]')).toBeTruthy();
  });

  it('should render "all" radio button as checked radio input', () => {
    const allRadioButton = wrapper.find('input#all');
    const femaleRadioButton = wrapper.find('input#female');
    const maleRadioButton = wrapper.find('input#male');

    expect(allRadioButton.is('input:checked')).toBe(true);
    expect(femaleRadioButton.is('input:checked')).toBe(false);
    expect(maleRadioButton.is('input:checked')).toBe(false);
  });
});
