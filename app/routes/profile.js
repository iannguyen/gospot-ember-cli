import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),

  model() {
    let user = this.store.findRecord('user');
    this.set('user', user);
    return user;
  },

  actions: {
    depositSkin(skin) {
      let user = this.get('user');
      let newSkin = user.get('skins').createRecord(skin);
      newSkin.save();
    },
    withdrawSkin(skin) {
      skin.destroyRecord();
    },
    destroyPayouts(payouts) {
      let _this = this;
      payouts.forEach(function(payout) {
        payout.destroyRecord(payout).then(() => {
          _this.refresh();
        });
      });
    },
  },
});
