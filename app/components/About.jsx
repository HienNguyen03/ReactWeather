var React = require('react');

//stateless, haing only render function, does not maintain any state
var About = (props) => {
  return (
    <div>
        <h1 className="text-center">About Page</h1>
        <p>This is a weather application build on React.</p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              JavaScript framework used.
          </li>
          <li>
            <a href="http://openWeathermap.org">Open Weather Map</a> - Searching
              for weather data by city name.
          </li>
        </ul>
    </div>

  );
}
module.exports = About;
