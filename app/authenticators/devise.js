import Ember from 'ember';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
  // serverTokenEndpoint: 'http://localhost:3000/users/sign_in',
  // resourceName: 'users',
  // crossOriginWhitelist: ['http://localhost:3000'],

  // restore: function(data) {
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     if (!Ember.isEmpty(data.session_name)) {
  //       resolve(data);
  //     } else {
  //       reject();
  //     }
  //   });
  // },
  //
  // authenticate: function(options) {
  //   let _this = this;
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.ajax({
  //       type: "POST",
  //       url: 'http://localhost:3000/users/sign_in',
  //       data: {
  //         users: {
  //           email: options.email,
  //           password: options.password
  //         }
  //       },
  //     }).then(function(response) {
  //       Ember.run(function() {
  //         resolve(response);
  //       });
  //     }, function(xhr, status, error) {
  //       Ember.run(function() {
  //         reject(xhr.responseJSON || xhr.responseText);
  //       });
  //     });
  //   });
  // },
  //
  // invalidate: function() {
  //   console.log('invalidate...');
  //
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.ajax({
  //       type: "DELETE",
  //       url: 'http://localhost:3000/users/sign_out',
  //     }).then(function(response) {
  //       Ember.run(function() {
  //         resolve(response);
  //       });
  //     }, function(xhr, status, error) {
  //       Ember.run(function() {
  //         reject(xhr.responseJSON || xhr.responseText);
  //       });
  //     });
  //   });
  // },
});
