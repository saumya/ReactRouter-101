/**
* Three steps for a component creation
* 1. import necessary files
* 2. define the component
* 3. export the component to be used somewhere
**/
var React = require('react');
var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Home</h2>
      </div>
    );
  }
});
module.exports = Home;
