import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('number'),
  total: DS.attr('number'),
  user: DS.belongsTo('user', {async: false}),
  team: DS.belongsTo('team', {async: false}),
  match: DS.belongsTo('match', {async: false}),
  skins: DS.hasMany('skin', {async: false})
});
