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
      <div className='col-sm-6 col-md-4 panel panel-default panel-body project-thumbnail'>
        <Link to={'projects/'+this.props.project.id}>
      	<div className='thumbnail'>
          <img src={this.props.project.img}/>
      	</div>
        <h4>{this.props.project.name}</h4>
        </Link>
      </div>
    );
  }
}); 

module.exports = Project;