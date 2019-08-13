import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      task: this.store.findAll("task"),
      comments: this.store.findAll("comment")
    })
  }
});
