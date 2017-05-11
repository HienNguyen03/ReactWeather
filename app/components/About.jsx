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
    <h3>About Component</h3>
  );
}
module.exports = About;
