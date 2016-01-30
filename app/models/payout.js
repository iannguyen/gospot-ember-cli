import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr('number'),
  skins: DS.hasMany('skin'),
  total: DS.attr('number'),
});
