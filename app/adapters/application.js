import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise',
  headers: Ember.computed(function() {
    let token = Ember.$('meta[name="csrf-token"]').attr('content');
    return {"X-CSRF-Token": token};
  }),
});
