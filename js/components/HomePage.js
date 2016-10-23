var React = require('react');

var ProjectsPage = require('./ProjectsPage');
var ContactPage = require('./ContactPage');

var HomePage = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    return (
    	<div className='jumbotron'>
    		<a name="home" id="home" className='anchor'></a>
      	<h1> Welcome </h1>
      	<a name="projects" id="projects" className='anchor'></a>
      		<ProjectsPage />
      	<a name="contact" id="contact" className='anchor'></a>
      		<ContactPage />
      </div>
    );
  }
}); 

module.exports = HomePage;