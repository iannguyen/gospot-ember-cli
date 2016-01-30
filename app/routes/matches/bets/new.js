import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    let team = this.controllerFor('main').get('selectedTeam');
    if (!team) {
      this.transitionTo('matches');
    }
  },

  model() {
    return this.store.findRecord('user');
  },

  actions: {
    submitBet(skins) {
      this.controllerFor('main').send('submitBet', skins);
    },
  }
});
