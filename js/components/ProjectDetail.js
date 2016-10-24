var React = require('react');
var Link = require('react-router').Link;

var ProjectDetail = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    var display = this.props.project.github ? '' : 'none';
    return (
      <div className='jumbotron'>
      <h1>
        <a href='#projects' className='btn btn-default back btn-arrow-left' role='button'>
          Back
        </a>
        {this.props.project.name}
      </h1>
    		<div className='row'>
      		<img src={this.props.project.img} width='300'/>
      	</div>
        <p>{this.props.project.description}</p>
        <div className='github-link' style={{display: display}}>
          <a href={this.props.project.github} target="_blank">Github Link</a>
        </div>
      </div>
    );
  }
}); 

module.exports = ProjectDetail;