import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  total: DS.attr('number'),
  match: DS.belongsTo('match', {async: true}),
  bets: DS.hasMany('bet'),
});
