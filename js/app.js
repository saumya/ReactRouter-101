// Application Entry
var React = require ('react');
var ReactDOM = require ('react-dom');
// Let's use Routes
// not using an ES6 transpiler
var Router = require('react-router').Router;
var Route = require('react-router').Route;
//var RouteHandler = Route.RouteHandler;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
// List of Components
var Home = require('./components/home.react');
var PageOne = require('./components/pageOne.react');
var PageTwo = require('./components/pageTwo.react');
var AppEntry = require('./components/appEntry.react');
// Routing
// Route declaration : type : 1
var routes = (
              <Route path="/" component={AppEntry}>
                <IndexRoute component={Home} />
                <Route path="one" component={PageOne} />
                <Route path="two" component={PageTwo} />
              </Route>
            );

/*
// Route declaration : type : 2
var routes = {
  path: '/',
  component: AppEntry,
  childRoutes: [
    { path: 'one', component: PageOne },
    { path: 'two', component: PageTwo },
  ]
}
*/
//
ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('react-app')
);
