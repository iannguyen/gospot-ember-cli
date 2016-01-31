import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('match');
  },

  actions: {
    teamSelected(team, match) {
      this.controllerFor('main').send('teamSelected', team, match);
      this.transitionTo('matches.bets.new', match);
    },
    showBets(match) {
      this.transitionTo('matches.bets', match);
    },
    goHome() {
      this.transitionTo('matches');
    },
  }
});
