var React = require('react');

var ProjectList = require('./ProjectList');
var ProjectStore = require('../stores/ProjectStore');

var ProjectsPage = React.createClass({
  render: function() {
    return (
      <div className='page-header'>
        <h1>Projects</h1>
        <ProjectList projects={ProjectStore.getAll()} />
      </div>
    )
  }
});

module.exports = ProjectsPage;