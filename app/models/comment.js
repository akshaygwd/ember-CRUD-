import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.belongsTo('task', {async: false}),
  body: DS.attr('string')
});
