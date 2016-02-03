import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('number'),
  total: DS.attr('number'),
  user: DS.belongsTo('user', {async: true}),
  team: DS.belongsTo('team', {async: true}),
  match: DS.belongsTo('match', {async: true}),
  skins: DS.hasMany('skin')
});
