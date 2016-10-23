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
    // $('page-link').click(function (e) {
    //   e.preventDefault();

    //   var target = this.hash;
    //   var $target = $(target);

    //   $('html, body').stop().animate({
    //       scrollTop: $target.offset().top,
    //   }, function () {
    //       window.location.hash = target;
    //   });
    // });

  },
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <ul className="nav navbar-nav">
            <li role="presentation" className='page-link'><a href='#home'>Miles Lindheimer</a></li>
            <li role="presentation" className='page-link'><a href='#home'>Home</a></li>
            <li role="presentation" className='page-link'><a href='#projects'>Projects</a></li>
            <li role="presentation" className='page-link'><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});
window.addEventListener("hashchange", function() { scrollBy(0, -50) });
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