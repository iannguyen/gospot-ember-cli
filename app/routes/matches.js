import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    let _this = this;
    Ember.run.later(function() {
      _this.refresh();
    }, 90000);
    return this.store.findAll('match');
  },

  actions: {
    teamSelected(team, match) {
      this.controllerFor('bet').send('teamSelected', team, match);
      this.transitionTo('matches.bets.new', match);
    },
    showBets(match) {
      this.transitionTo('matches.bets', parseInt(match.id));
    },
    goHome() {
      this.transitionTo('matches');
    },
  }
});
