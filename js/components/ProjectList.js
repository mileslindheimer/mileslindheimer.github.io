var React = require('react');

var Project = require('./Project')

var ProjectList = React.createClass({
  render: function() {
		var projects = [];
		var that = this;
  	this.props.projects.forEach(function(project) {
    	projects.push(
    		<Project 
    			key={project.name} 
    			project={project} 
    		/>
    	);
  	});
    return (
    	<ol className='ProductList'>
      	{projects}
    	</ol>
    );
  }
}); 

module.exports = ProjectList;