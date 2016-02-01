import Ember from 'ember';

export default Ember.Route.extend({

  model(transition, params) {
    let _this = this;
    let matchId = parseInt(transition.match_id);
    Ember.run.later(function() {
      _this.refresh();
    }, 90000);
    return this.store.queryRecord('match', {id: matchId});
  }

});
