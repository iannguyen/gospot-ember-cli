import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('matches', function() {
    this.route('bets', {path: ":match_id/bets"}, function() {
      this.route('new');
    });
  });
  this.route('register');
  this.route('profile');
});

export default Router;
