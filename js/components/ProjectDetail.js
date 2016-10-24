var React = require('react');
var Link = require('react-router').Link;

var ProjectDetail = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    return (
      <div className='jumbotron'>
      <a href='#projects' className='btn btn-default back' role='button'>Back</a>
      <h1>{this.props.project.name}</h1>
    	<li className='col-md-6 list-group-item'>
    		<div className='row'>
      		<img src={this.props.project.img} width='200'/>
      	</div>
      	<h4 className='list-group-item-heading'>
	      	{this.props.project.name}
      	</h4>
      	<div className='list-group-item-text'>
        	{this.props.project.description}
        </div>
    	</li>
      </div>
    );
  }
}); 

module.exports = ProjectDetail;