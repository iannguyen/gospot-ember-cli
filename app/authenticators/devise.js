import Ember from 'ember';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

const { RSVP, isEmpty, run } = Ember;

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: 'https://api-thegospot.herokuapp.com/users/sign_in',
  resourceName: 'users',
  crossOriginWhitelist: ['https://api-thegospot.herokuapp.com/'],

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
