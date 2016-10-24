var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Navbar = require('./components/Navbar');
var HomePage = require('./components/HomePage');
var ProjectDetailPage = require('./components/ProjectDetailPage');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Navbar}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="projects" component={HomePage} />
      <Route path="projects/:id" component={ProjectDetailPage}/>
      <Route path="contact" component={HomePage} />
    </Route>
  </Router>
  ), document.getElementById('content')
);