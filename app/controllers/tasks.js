import Ember from 'ember';
import task from '../models/task';

export default Ember.Controller.extend({
  actions: {
    deleteTask: function(id) {
      this.store.findRecord('task', id).then((task) => {
        task.deleteRecord();
        task.save();
      })
    }
  }
});
