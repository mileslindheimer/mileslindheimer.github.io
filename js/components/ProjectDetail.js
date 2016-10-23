var React = require('react');

var ProjectDetail = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    return (
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
        <div className='row'>
	      </div>
    	</li>
    );
  }
}); 

module.exports = ProjectDetail;