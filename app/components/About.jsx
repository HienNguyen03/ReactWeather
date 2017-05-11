var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

//stateless, haing only render function, does not maintain any state
var About = (props) => {
  return (
    <div>
        <h3>About Page</h3>
        <p>Welcome to ReactWeather application</p>
    </div>

  );
}
module.exports = About;
