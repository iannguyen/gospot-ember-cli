import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  // host: 'http://localhost:3000',
  authorizer: 'authorizer:devise',
  corsWithCredentials: true,

  headers: function() {
    return {
      "X-XSRF-TOKEN": decodeURIComponent(Ember.get(document.cookie.match(/XSRF\-TOKEN\=([^;]*)/), "1"))
    };
  }.property().volatile(),

  // ajax: function() {
  //   Ember.$.ajaxSetup({
  //     crossDomain: true,
  //     xhrFields: {
  //       withCredentials: true
  //     }
  //   });
  // }
});
