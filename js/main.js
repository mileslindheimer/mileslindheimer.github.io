var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var Project = require('./components/Project');
var ProjectDetail = require('./components/ProjectDetail');
var ProjectList = require('./components/ProjectList');
var HomePage = require('./components/HomePage');
var ContactPage = require('./components/ContactPage');
var ProjectStore = require('./stores/ProjectStore');

var ProjectsPage = React.createClass({
  render: function() {
    return (
      <div className='page-header'>
        <h1>Projects</h1>
        <ProjectList projects={ProjectStore.getAll()} />
      </div>
    )
  }
});

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
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <div className="navbar-brand"><Link to="/">Miles Lindheimer</Link></div>
            <li role="presentation"><Link to="/">Home</Link></li>
            <li role="presentation"><Link to="projects">Projects</Link></li>
            <li role="presentation"><Link to="contact">Contact</Link></li>
          </ul>
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
      <Route path="projects" component={ProjectsPage}/>
      <Route path="projects/:id" component={ProjectDetailPage}/>
      <Route path="contact" component={ContactPage}/>
    </Route>
  </Router>
  ), document.getElementById('content')
);