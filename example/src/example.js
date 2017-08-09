import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GaussianBlur from 'react-gaussian-blur';

class App extends Component {
  render() {
	return (
	  <div>
		<GaussianBlur x="8" y="5">
		  Hello world
		</GaussianBlur>
	  </div>
	);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
