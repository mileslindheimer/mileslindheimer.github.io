var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _projects = require('../resources/projects');

var ProjectStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _projects;
  },
  getById: function(id) {
    for (i=0; i<_projects.length; i++) {
      var project = _projects[i];
      if (project.id === id) {
        return project;
      }
    }
  }
});

module.exports = ProjectStore;