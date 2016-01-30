import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  didInitAttrs() {
    let won = this.get('won');
    if (won) {
      this.set('status', 'win-item');
    } else {
      this.set('status', 'skin-item');
    }
  },

  actions: {
    depositSkin() {
      let skin = this.get('skin');
      let data = {
        price: skin.price,
        name: skin.name,
      };
      this.sendAction('depositSkin', data);
    },
    withdrawSkin() {
      let skin = this.get('skin');
      this.sendAction('withdrawSkin', skin);
    },
    placeBet() {
      let skin = this.get('skin');
      this.sendAction('placeBet', skin);
    }
  }
});
