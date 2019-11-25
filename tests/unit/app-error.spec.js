import { shallowMount } from '@vue/test-utils';
import AppError from '@/components/AppError';

describe('AppError.vue', () => {
  it('should render with defined props', () => {
    const props = {
      error: 'Error message',
      handleError: jest.fn(),
      buttonText: 'trigger'
    };
    const wrapper = shallowMount(AppError, {
      propsData: props
    });

    const wrapperProps = wrapper.props();

    expect(wrapperProps).toHaveProperty('error', props.error);
    expect(wrapperProps).toHaveProperty('buttonText', props.buttonText);
    expect(wrapperProps).toHaveProperty('handleError', props.handleError);
  });
});
