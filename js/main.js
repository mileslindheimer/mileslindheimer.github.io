var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var Project = require('./components/Project');
var ProjectDetail = require('./components/ProjectDetail');
var ProjectList = require('./components/ProjectList');
var ContactPage = require('./components/ContactPage');
var projects = require('./components/projects');

var ProjectsPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectList projects={projects} />
      </div>
    )
  }
});

var ProjectDetailPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <ProjectDetail projects={projects} />
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-brand"><Link to="/">Miles Lindheimer</Link></div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="projects">Projects</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="projects" component={ProjectsPage}>
        <Route path=":id" component={ProjectDetailPage}/>
      </Route>
      <Route path="contact" component={ContactPage}/>
    </Route>
  </Router>
  ), document.getElementById('content')
);