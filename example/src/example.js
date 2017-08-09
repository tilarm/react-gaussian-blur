var React = require('react');
var ReactDOM = require('react-dom');
var GaussianBlur = require('react-gaussian-blur');

var App = React.createClass({
  render () {
	return (
	  <div>
		<GaussianBlur x="10" y="10">Hello world</GaussianBlur>
	  </div>
	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
