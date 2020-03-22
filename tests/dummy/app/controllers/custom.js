import Controller from '@ember/controller';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

const LOADER_STYLES = [
  'loader-circular-dots-fade',
  'loader-bars',
  'loader-fading-circle',
  'loader-scaling-circles',
  'loader-trailing-dots',
  'loader-horizontal-dots',
  'loader-circle-slice'
];


export default Controller.extend({
  loaderStyle: LOADER_STYLES[6],
  isLoading: true,
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
