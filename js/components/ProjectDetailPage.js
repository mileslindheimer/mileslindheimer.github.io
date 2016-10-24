var React = require('react');

var ProjectDetail = require('./ProjectDetail');
var ProjectStore = require('../stores/ProjectStore');

var ProjectDetailPage = React.createClass({
  render: function() {
    return (
      <div>
        <ProjectDetail project={ProjectStore.getById(this.props.params.id)} />
      </div>
    )
  }
});

module.exports = ProjectDetailPage;