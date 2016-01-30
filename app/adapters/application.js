import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'ember-front/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.API_HOST,
  authorizer: 'authorizer:devise',
  // headers: Ember.computed(function() {
  //   let token = Ember.$('meta[name="csrf-token"]').attr('content');
  //   return {"X-CSRF-Token": token};
  // }),
});
