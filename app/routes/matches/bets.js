import Ember from 'ember';

export default Ember.Route.extend({

  model(transition, params) {
    let matchId = parseInt(transition.match_id);
    return this.store.queryRecord('match', {id: matchId});
  }

});
