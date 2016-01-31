import Ember from 'ember';
import Session from "ember-simple-auth/services/session";

export default Session.extend({
  store: Ember.inject.service(),

  account: Ember.computed(function() {
    return this.session.get('authenticated.email');
  }),

  setCurrentUser: Ember.observer('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      let _this = this;
      let email = this.get('account');
      this.get('store').queryRecord('user',{email: email}).then((user) => {
        _this.set('currentUser', user);
      });
    }
  }).observes('isAuthenticated'),
});
