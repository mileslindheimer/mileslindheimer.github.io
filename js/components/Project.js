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
    	<li className='col-md-3 list-group-item'>
    		<h4 className='list-group-item-heading'>
	      	<Link to={"projects/"+this.props.project.id}>
	      		{this.props.project.name}
	      	</Link>
      	</h4>
      	<img className='img-thumbnail' src={this.props.project.img} width='200' height='200' />
    	</li>
    );
  }
}); 

module.exports = Project;