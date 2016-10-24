var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var Project = require('./components/Project');
var ProjectDetail = require('./components/ProjectDetail');
var HomePage = require('./components/HomePage');
var ProjectsPage = require('./components/ProjectsPage');
var ContactPage = require('./components/ContactPage');
var ProjectStore = require('./stores/ProjectStore');

var ProjectDetailPage = React.createClass({
  render: function() {
    return (
      <div>
        <ProjectDetail project={ProjectStore.getById(this.props.params.id)} />
      </div>
    )
  }
});

var App = React.createClass({
  componentDidMount: function() {
    $("button").mouseup(function(){
      $(this).blur();
    });
    $('button').click(function(){
      $('.collapse').collapse('toggle')
    });
  },
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#home">Miles Lindheimer</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="projects" component={HomePage} />
      <Route path="projects/:id" component={ProjectDetailPage}/>
      <Route path="contact" component={HomePage} />
    </Route>
  </Router>
  ), document.getElementById('content')
);