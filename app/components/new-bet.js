import Ember from 'ember';

export default Ember.Component.extend({
  placedBets: [],
  inventory: [],

  didInitAttrs() {
    let skins = this.get('skins');
    this.set('inventory', skins);
    this.set('placedBets', []);
  },

  totalValue: Ember.computed('placedBets.[]', function() {
    let sum = 0;
    let placedBets = this.get('placedBets');
    if (placedBets.length > 0) {
      placedBets.forEach(function(bet) {
        sum += bet.get('price');
      });
    }
    return Math.round(sum * 100) / 100;
  }),

  totalValueObserver: Ember.observer('totalValue', function() {
    let totalValue = this.get('totalValue');
    if (totalValue < 10) {
      let difference = Math.round((10 - totalValue) * 100) / 100;
      this.set('message', "$" + difference.toString() + " more to place bet");
    } else {
      this.set('message', '');
      this.set('ready', true);
    }
  }),

  actions: {
    placeBet(skin) {
      let placedBets = this.get('placedBets');
      let inventory = this.get('inventory');
      if (placedBets.length < 10) {
        placedBets.pushObject(skin);
        inventory.removeObject(skin);
      } else {
        this.set('message', "That's enough.");
      }
    },
    submitBet() {
      let skins = this.get('placedBets');
      this.sendAction('submitBet', skins);
    }
  }
});
