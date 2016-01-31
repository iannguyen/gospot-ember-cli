import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel() {
    let team = this.controllerFor('main').get('selectedTeam');
    if (!team) {
      this.transitionTo('matches');
    }
  },

  model() {
    let email = this.get('session.account');
    return this.store.queryRecord('user', {email: email});
  },

  actions: {
    submitBet(skins) {
      this.controllerFor('main').send('submitBet', skins);
    },
  }
});
