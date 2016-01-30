import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  skins: DS.hasMany('skin'),
  bets: DS.hasMany('bet'),
  payouts: DS.hasMany('payout')
});
