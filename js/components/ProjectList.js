var React = require('react');

var Project = require('./Project')

var ProjectList = React.createClass({
  render: function() {
		var projects = [];
		var that = this;
    var rowNum = 0;
  	this.props.projects.forEach(function(project) {
      rowNum++;
    	projects.push(
    		<Project 
    			key={project.name} 
    			project={project} 
          rowNum={rowNum%2}
    		/>
    	);
  	});
    return (
    	<ol>
      	{projects}
    	</ol>
    );
  }
}); 

module.exports = ProjectList;