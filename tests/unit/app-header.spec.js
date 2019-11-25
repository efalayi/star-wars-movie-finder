import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader';

describe('AppHeader.vue', () => {
  const wrapper = shallowMount(AppHeader, {
    stubs: {
      RouterLink: RouterLinkStub
    }
  });

  it('should have "app__header" class', () => {
    expect(wrapper.classes()).toContain('app__header');
  });

  it('should have link to home index page', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/');
  });
});
