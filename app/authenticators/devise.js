import Ember from 'ember';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import config from '../config/environment';

const { RSVP, isEmpty, run } = Ember;

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: config.api.host + '/users/sign_in',
  resourceName: 'users',
  crossOriginWhitelist: [config.api.host + '/'],

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
