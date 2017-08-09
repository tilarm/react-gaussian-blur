import React, {Component} from 'react';
import SvgFilter from './SvgFilter';

class GaussianBlur extends Component {
  render() {
	var style = {
	  filter: 'url("#svg-blur")'
	};
	return (
	  <div style={style}>
		<SvgFilter x={this.props.x} y={this.props.y}/>
		{this.props.children}
	  </div>
	);
  }
}

export default GaussianBlur;
