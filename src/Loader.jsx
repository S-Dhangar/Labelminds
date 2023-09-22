import React from 'react';
import './Loader.css'; // Import your loader's CSS file

const Loader = () => {
  return (
    <div style={{height:"900px",background: "linear-gradient(#141e30, #243b55)"}}>
    <div id="loader">
	<div id="d1"></div>
	<div id="d2"></div>
	<div id="d3"></div>
	<div id="d4"></div>
	<div id="d5"></div>

</div>

    </div>
  );
};

export default Loader;