import Ember from 'ember';
import task from '../../models/task';

export default Ember.Controller.extend({
  actions: {
    addComment: function(id) {
      const body = this.get('comment');
      let comment = this.store.createRecord('comment', {
        task: this.store.peekRecord("task", id),
        body: body
      });
      comment.save();
    }
  }
});
