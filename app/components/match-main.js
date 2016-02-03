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
    if (this.get('betted') || this.matchOver() || this.matchStarted()) {
      this.set('bettable', false);
    }
    else {
      this.set('bettable', true);
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
    let over = this.matchOver();

    if (over) {
      this.set("matchMessage", "Match Over");
    }
    else if (started) {
      this.set("matchMessage", "In Progress");
    }
    else {
      this.set("matchMessage", this.startTime());
    }
  }).observes('bettable').on('init'),

  actions: {
    showBets() {
      let match = this.get('match');
      this.sendAction('showBets', match);
    },

    selectTeam(team) {
      this.userHasBetted();
      if (!this.get('betted') && this.get('bettable') && !this.matchStarted()) {
        let match = this.get('match');
        if (match.get('team_1') === team) {
          this.set('team1Selected', true);
          this.set('team2Selected', false);
        } else {
          this.set('team2Selected', true);
          this.set('team1Selected', false);
        }
        this.sendAction('teamSelected', team, match);
      } else {
        this.set('bettable', false);
      }
    },
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

  startTime() {
    let startHour = this.get('match.start_hour');
    let period = "AM";
    if (startHour > 12) {
      startHour -= 12;
      period = "PM";
    }
    return startHour.toString() + ":00 " + period + " (PST)";
  }
});
