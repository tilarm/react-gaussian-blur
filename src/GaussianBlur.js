import React, {Component} from 'react';
import SvgFilter from './SvgFilter';
import PropTypes from 'prop-types';

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

GaussianBlur.propTypes = {
  children: PropTypes.element.isRequired,
  x: PropTypes.integer,
  y: PropTypes.number,
};

export default GaussianBlur;
