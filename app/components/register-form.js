import Ember from 'ember';
import config from '../config/environment';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    createUser() {
      let _this = this;
      let data = this.getProperties('email', 'password', 'password_confirmation');

      Ember.$.ajax({
        method: "post",
        url: config.api.host + "/users",
        data: { user: data },
        }).then(() => {
            _this.get('session').authenticate('authenticator:devise',
              data.email, data.password).catch((reason) => {
              _this.set('errorMessage', reason.error);
        });
      });
    }
  }
});
