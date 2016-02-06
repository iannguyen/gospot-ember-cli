import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    teamSelected(team, match) {
      this.set('match', match);
      this.set('selectedTeam', team);
    },
    submitBet(skins) {
      let _this = this;
      let match = this.get('match');
      let user_id = this.get('session.currentUser.id');
      let skinIds = skins.map(function(skin) { return skin.id; });
      let railsParams = {
        user_id: parseInt(user_id),
        team_id: this.get('selectedTeam').id,
        match_id: parseInt(match.id),
        skin_ids: skinIds,
      };

      Ember.$.ajax ({
        method: 'post',
        url: config.api.host + '/api/bets',
        data: { bet: railsParams },
        type: 'json',
      }).then(() => {
          _this.get('store').queryRecord('match', {id: match.id});
          _this.transitionToRoute('matches.bets');
      });
    }
  }
});
