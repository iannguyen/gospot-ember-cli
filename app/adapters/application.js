// import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: 'https://api-thegospot.herokuapp.com/',
  authorizer: 'authorizer:devise',
  corsWithCredentials: true,

  shouldReloadAll() {
    return true;
  },

  // headers: function() {
  //   return {
  //     "X-XSRF-TOKEN": decodeURIComponent(Ember.get(document.cookie.match(/XSRF\-TOKEN\=([^;]*)/), "1"))
  //   };
  // }.property().volatile(),
});
