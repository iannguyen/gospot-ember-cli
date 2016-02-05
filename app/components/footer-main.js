import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideFooter() {
      if (this.get('hidden')) {
        this.set('hidden', false);
      } else {
        this.set('hidden', true);
      }
    }
  }
});
