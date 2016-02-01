import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  bettable: {},

  didRender() {
    this.userHasBetted();
    this.getMatchState();
  },

  userHasBetted() {
    let currentUserId = parseInt(this.get('session.currentUser.id'));
    let bets = this.get('match').get('bets').filterBy('user_id', currentUserId);
    if (bets.length > 0) {
      this.set('betted', true);
    } else {
      this.set('betted', false);
    }
  },

  getMatchState() {
    if (this.get('betted')) {
      this.set('bettable', false);
    }
    else if (!this.matchStarted()) {
      this.set('bettable', true);
    }
    else {
      this.set('bettable', false);
    }
  },

  team1Odds: Ember.computed('match.team_1_odds', function() {
    let odds = this.get('match.team_1_odds');
    return Math.round(odds * 100);
  }),

  team2Odds: Ember.computed('match.team_2_odds', function() {
    let odds = this.get('match.team_2_odds');
    return Math.round(odds * 100);
  }),

  bettedObserver: Ember.observer('betted', function() {
    let betted = this.get('betted');
    if (betted) {
      this.set('notification', "You have betted");
    }
  }).observes('betted').on('init'),

  bettableObserver: Ember.observer('bettable', function() {
    let started = this.matchStarted();

    if (!started) {
      this.set("matchMessage", "8:00PM (PST)");
    } else if (!this.matchOver()) {
      this.set("matchMessage", "In Progress");
    } else {
      this.set("matchMessage", "Match Over");
    }
  }).observes('bettable').on('init'),

  actions: {
    showBets() {
      let match = this.get('match');
      this.sendAction('showBets', match);
    },
    selectTeam1(team) {
      this.userHasBetted();
      if (this.get('bettable') && !this.matchStarted()) {
        let match = this.get('match');
        this.set('team1Selected', true);
        this.set('team2Selected', false);
        this.sendAction('teamSelected', team, match);
      } else {
        this.set('bettable', false);
      }
    },
    selectTeam2(team) {
      this.userHasBetted();
      if (this.get('bettable') && !this.matchStarted()) {
        let match = this.get('match');
        this.set('team2Selected', true);
        this.set('team1Selected', false);
        this.sendAction('teamSelected', team, match);
      } else {
        this.set('bettable', false);
      }
    }
  },

  matchOver() {
    let match = this.get('match');
    let score1 = match.get('team_1_score');
    let score2 = match.get('team_2_score');
    if (score1 === 16 || score2 === 16) {
      return true;
    } else {
      return false;
    }
  },

  matchStarted() {
    let match = this.get('match');
    let pstHours = this.getPSTHours();
    if (pstHours < match.get('start_hour')) {
      return false;
    } else {
      return true;
    }
  },

  getPSTHours() {
    let today = new Date();
    let utcHours = today.getUTCHours();
    let pstHours = (utcHours + 24 - 8) % 24;
    return pstHours;
  },
});
