import React from 'react';
import './Split.css';

function Splitz(props) {
  // to make Split custom component configuratable
  // e.g. permit classNames props assigned from elsewhere 
  // (say, the parent App.js)
  const combinedClassName = `split ${props.className}`;

  return (
    // <div className="split">
    <div className={combinedClassName}>
      {props.children}
      {/* This is the content of the split component. Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
    </div>
  );
}

export default Splitz;

