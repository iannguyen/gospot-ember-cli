// import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: config.api.host,
  authorizer: 'authorizer:devise',
  corsWithCredentials: true,

  shouldReloadRecord: function(store, snapshot) {
    return false;
  },

  shouldReloadAll: function(store, snapshot) {
    return false;
  },

  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  },

  shouldBackgroundReloadAll: function(store, snapshot) {
    return true;
  }
});
