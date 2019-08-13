import Ember from 'ember';
import task from '../models/task';

export default Ember.Controller.extend({
  comments: Ember.computed("model.comment", function(){
    return this.get("model.comments");
  }),
  actions: {
    deleteTask: function(id) {
      this.store.findRecord('task', id).then((task) => {
        task.deleteRecord();
        task.save();
      })
    },
    removeComment: function(id) {
      this.store.findRecord('comment', id).then((comment) => {
        comment.deleteRecord();
        comment.save();
      })
    }
  }
});
