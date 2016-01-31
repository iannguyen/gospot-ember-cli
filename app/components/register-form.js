import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    createUser() {
      let _this = this;
      let data = this.getProperties('email', 'password', 'password_confirmation');

      Ember.$.ajax({
        method: "post",
        url: "https://immense-fjord-25899.herokuapp.com/users",
        data: { user: data },
        }).then(() => {
            _this.get('session').authenticate('authenticator:devise',
              data.email, data.password).catch(() => {
              _this.set('errorMessage', "Try again.");
        });
      });
    }
  }
});
