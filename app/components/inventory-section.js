import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  willRender() {
    this.checkIfhasWinnings();
  },

  checkIfhasWinnings() {
    let payouts = this.get('payouts');
    let sum = 0;
    if (payouts && payouts.get('length') > 0) {
      payouts.forEach(function(payout) {
        sum += payout.get('total');
      });
      this.set('hasPayout', true);
      this.set('totalWinnings', sum);
    } else {
      this.set('hasPayout', false);
    }
  },

  actions: {
    destroyPayouts() {
      let payouts = this.get('payouts');
      this.sendAction('destroyPayouts', payouts);
    }
  }

});
