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
    	<div>
	    	<div className='jumbotron'>
	    		<a name="home" id="home" className='anchor'></a>
	      	<h1>Welcome</h1>
	      	<img src='../../img/welcome.jpg'  width='600px'/>
	      	<p>Below are a few of the projects I've been working on lately</p>
	      </div>
	      <div className='jumbotron'>
	      	<a name="projects" id="projects" className='anchor'></a>
	      		<ProjectsPage />
	      </div>
	      <div className='jumbotron'>
	      	<a name="contact" id="contact" className='anchor'></a>
	      		<ContactPage />
	      </div>
      </div>
    );
  }
}); 

module.exports = HomePage;