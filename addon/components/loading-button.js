import Ember from 'ember';
import layout from '../templates/components/loading-button';

const {
  get,
  set,
  computed,
  observer,
  deprecate,
  getWithDefault,
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: ['loading-button'],
  classNameBindings: ['customClass'],
  attributeBindings:[
    'style:data-style',
    'color:data-color',
    'isLoading:data-loading',
    'isDisabled:disabled',
    'size:data-size'
  ],
  isLoading: false,
  isDisabled: computed.reads('isLoading'),
  loaderStyle: 'loader-circular-dots-fade',
  click() {
    this.set('isLoading', true);
    let params = getWithDefault(this, 'params', []);
    let callbackHandler = (promise) => {
      Ember.run(this, () => {
        set(this, 'promise', promise);
      });
    };

    if(typeof this.get('action') === 'function') {
      let deprecatingCallbackHandler = function(promise) {
        deprecate(`When using closure style actions with ember-progress-button,
                   please return the promise instead of using the callback argument.
                   The callback for closure actions will be removed in future versions.`,
                  false,
                  { id: 'ember-progress-button.action-callback', until: '1.0.0' });

        callbackHandler(promise);
      };

      let promise = get(this, 'action')(deprecatingCallbackHandler, ...params);

      if (promise && typeof promise.then === 'function') {
        callbackHandler(promise);
      }
    } else {
      let actionArguments = ['action', callbackHandler, ...params];
      this.sendAction(...actionArguments);
    }

    // If this is part of a form, it will perform an HTML form
    // submission without returning false to prevent action bubbling
    return false;

  },

  handleActionPromise: observer('promise', function() {
    let promise = get(this, 'promise');

    if (!promise) {
      return;
    }

    promise.then(() => {
      if (!this.isDestroyed) {
        set(this, 'isLoading', false);
        set(this, 'textState', 'fulfilled');
      }
    }).catch(() => {
      if (!this.isDestroyed) {
        set(this, 'isLoading', false);
        set(this, 'textState', 'rejected');
      }
    });
  })
});
