export default {
  bind(el, binding, vnode) {
    const domElement = el;
    domElement.clickOutsideEvent = (event) => {
      // check if click event was triggered outside dom element
      const domElementIsTarget = domElement === event.target;
      const domElementContainsTarget = domElement.contains(event.target);

      if (!(domElementIsTarget || domElementContainsTarget)) {
        // call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', domElement.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};
