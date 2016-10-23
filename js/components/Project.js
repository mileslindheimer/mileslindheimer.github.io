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
      <div className={'container-fluid bg-'+this.props.rowNum+' text-center'}>
        <Link to={'projects/'+this.props.project.id}>
      	<li className='row'>
      		<h4>{this.props.project.name}</h4>
        	<img className='img-circle' src={this.props.project.img}/>
      	</li>
        </Link>
      </div>
    );
  }
}); 

module.exports = Project;