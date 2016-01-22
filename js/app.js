// Application Entry
var React = require ('react');
var ReactDOM = require ('react-dom');
/*
// Basic rendering
ReactDOM.render(
  <div>Welcome to React ion</div>,
  document.getElementById('react-app')
);
*/
// Let's use Routes
// not using an ES6 transpiler
var Router = require('react-router').Router;
var Route = require('react-router').Route;
//var RouteHandler = Route.RouteHandler;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
// List of Components
var App = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Route</h2>
        <ul>
          <li> <Link to='/one'> One </Link> </li>
          <li> <Link to='/two'> Two </Link> </li>
        </ul>
        {
          //renders the children
          this.props.children
        }
      </div>
      );
    }
});
var Dashboard = React.createClass({
  render: function(){
    return (
      <div>
        Dashboard
      </div>
    );
  }
});
var One = React.createClass({
  render: function () {
    console.log('One : render');
    return (
      <div> One </div>
    );
  }
});
var Two = React.createClass({
  render: function () {
    console.log('Two : render');
    return (
      <div> Two </div>
    );
  }
});
// Routing

// Route declaration : type : 1
var routes = (
              <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="one" component={One} />
                <Route path="two" component={Two} />
              </Route>
            );

/*
// Route declaration : type : 2
var routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'one', component: One },
    { path: 'two', component: Two },
  ]
}
*/
//
ReactDOM.render(
  <Router routes={routes} history={hashHistory}>
  </Router>,
  document.getElementById('react-app')
);
