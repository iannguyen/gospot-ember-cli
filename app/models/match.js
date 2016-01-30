import DS from 'ember-data';

export default DS.Model.extend({
  start_hour: DS.attr('number'),
  location: DS.attr('string'),
  open: DS.attr('boolean'),
  total: DS.attr('number'),
  team_1_score: DS.attr('number'),
  team_2_score: DS.attr('number'),
  team_1_odds: DS.attr('number'),
  team_2_odds: DS.attr('number'),
  team_1: DS.attr({defaultValue: function() {
    return this.get('team_1');
  }}),
  team_2: DS.attr({defaultValue: function() {
    return this.get('team_2');
  }}),
  teams: DS.hasMany('teams'),
  bets: DS.hasMany('bet')
});
