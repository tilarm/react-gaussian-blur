import React from 'react';

const style = {
  position: 'absolute',
  overflow: 'hidden',
  width: 0,
  height: 0,
  pointerEvents: 'none'
};

const SvgFilter = ({x, y}) => {
  return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={style}>
	  <defs>
		<filter id="svg-blur">
		  <feGaussianBlur in="SourceGraphic" stdDeviation={`${x},${y}`}/>
		</filter>
	  </defs>
	</svg>
  );
};

export default SvgFilter;
