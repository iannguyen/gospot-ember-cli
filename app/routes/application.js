import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    logout() {
      let _this = this;
      Ember.$.ajax({
        method: "delete",
        url: "/users/sign_out",
      }).then(() => { _this.get('session').invalidate(); });
    }
  }
});
