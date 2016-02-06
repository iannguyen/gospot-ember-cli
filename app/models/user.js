import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  skins: DS.hasMany('skin', {async: false}),
  bets: DS.hasMany('bet', {async: false}),
  payouts: DS.hasMany('payout', {async: false})
});
