import Ember from 'ember';

const {
  RSVP: { Promise },
  run: { later }
} = Ember;

const LOADER_STYLES = [
  'circular-dots-fade',
  'bars',
  'rotating-slice',
  'fading-circle',
  'scaling-circles',
  'trailing-dots',
  'horizontal-dots',
  'circle-slice'
];

export default Ember.Controller.extend({
  loaderStyle: LOADER_STYLES[0],
  loaderStyles: LOADER_STYLES,
  isLoading: false,
  actions: {
    promiseAction() {
      return new Promise((resolve) =>{
        later(function() {
          console.log('Promise Action from application controller'); // eslint-disable-line
          resolve();
        }, 5000);
      });
    },

    rejectPromiseAction() {
      return new Promise((resolve, reject) =>{
        later(function() {
          console.log('Reject Promise Action from application controller'); // eslint-disable-line
          reject();
        }, 1000);
      });
    }
  }
});
