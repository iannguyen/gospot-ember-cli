import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
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
    didTransition() {
      let _this = this;
      Ember.run.later(function() {
        if (window.location.pathname.indexOf('new') === -1) {
          _this.refresh();
        }
      }, 60000);
    },
  }
});
