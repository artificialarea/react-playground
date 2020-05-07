import React from 'react';
import './Split.css';

function Splitz(props) {
  // to make Split custom component configuratable
  // e.g. permit classNames props assigned from elsewhere 
  // (say, the parent App.js)
  const combinedClassName = `split ${props.className}`;
  const newStyles = {flex: props.flexBasis};

  return (
    <div 
      className={combinedClassName}
      style={newStyles}
    >
      {props.children}
      Appears that the original text from the parent is not overwritten by props.children... that text just gets prepended.
    </div>
  );
}

export default Splitz;

