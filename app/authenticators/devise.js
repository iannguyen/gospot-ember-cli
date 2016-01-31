import Ember from 'ember';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

const { RSVP, isEmpty, run } = Ember;

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: 'http://immense-fjord-25899.herokuapp.com/users/sign_in',
  resourceName: 'users',
  crossOriginWhitelist: ['http://immense-fjord-25899.herokuapp.com/'],

  authenticate(email, password) {
    return new RSVP.Promise((resolve, reject) => {
      const data = {
        user: {
          email: email,
          password: password
        }
      };
      this.makeRequest(data).then(function(response, status, xhr) {
        run(null, resolve, response);
      }, function(xhr) {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },
});
