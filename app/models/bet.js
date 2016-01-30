import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('number'),
  total: DS.attr('number'),
  user: DS.belongsTo('user'),
  team: DS.belongsTo('team'),
  match: DS.belongsTo('match'),
  skins: DS.hasMany('skin')
});
