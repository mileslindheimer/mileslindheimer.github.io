var React = require('react');
var Link = require('react-router').Link;

var Project = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    return (
        <Link to={'projects/'+this.props.project.id}>
      	<div className='col-sm-4 thumbnail project-thumbnail'>
          <img src={this.props.project.img}/>
      		<h4>{this.props.project.name}</h4>
      	</div>
        </Link>
    );
  }
}); 

module.exports = Project;