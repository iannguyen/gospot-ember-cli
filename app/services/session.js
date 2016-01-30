import Ember from 'ember';
import Session from "ember-simple-auth/services/session";

export default Session.extend({
  store: Ember.inject.service(),

  setCurrentUser: Ember.observer('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      let _this = this;
      this.get('store').queryRecord('user',{}).then((user) => {
        _this.set('currentUser', user);
      });
    }
  }).observes('isAuthenticated'),
});
