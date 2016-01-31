import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model() {
    let _this = this;
    let email = _this.get('session.account');
    return this.store.queryRecord('user', {email: email}).then((user) => {
      _this.set('user', user);
      return user;
    });
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
