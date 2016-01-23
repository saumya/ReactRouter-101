//
var React = require('react');
var Link = require('react-router').Link;
//
var AppEntry = React.createClass({
  render: function(){
    return(
      <div>
        <h2>React Route</h2>
        <ul>
          <li> <Link to='/'> Home </Link> </li>
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
module.exports = AppEntry;
