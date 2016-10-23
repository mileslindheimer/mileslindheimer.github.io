var React = require('react');

var HomePage = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    return (
    	<div className='jumbotron'>
      	<h1> Welcome </h1>
      </div>
    );
  }
}); 

module.exports = HomePage;