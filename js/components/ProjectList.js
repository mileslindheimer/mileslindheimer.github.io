var React = require('react');

var Project = require('./Project')

var ProjectList = React.createClass({
  render: function() {
		var projects = [];
		var that = this;
    var rowNum = 0;
  	this.props.projects.forEach(function(project) {
    	projects.push(
    		<Project 
    			key={project.name} 
    			project={project} 
    		/>
    	);
  	});
    return (
    	<div className='container-fluid text-center bg-grey'>
      	{projects}
    	</div>
    );
  }
}); 

module.exports = ProjectList;