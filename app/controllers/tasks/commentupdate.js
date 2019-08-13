import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      updateComment: function(id) {
        var newComment = this.get('model.body');
        this.store.findRecord('comment', id).then((comment) => {
          comment.set('body', newComment);
          comment.save();
        })
      }
    }
});
