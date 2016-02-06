import DS from 'ember-data';

export default DS.Model.extend({
  payout_id: DS.attr('number'),
  bet_id: DS.attr('number'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  user: DS.belongsTo('user', {async: false}),
  bet: DS.belongsTo('bet', {async: false})
});
