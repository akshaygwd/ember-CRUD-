import Ember from 'ember';
import task from '../../models/task';

export default Ember.Controller.extend({
  actions: {
    editTask: function (id) {
      var title = this.get('model.title');
      var date = this.get('model.date');
      var description = this.get('model.description');
      this.store.findRecord('task', id).then((task) => {
        task.set('title', title);
        task.set('date', new Date(date));
        task.set('decription', description);
        task.save();
      });
    }
  }
});
