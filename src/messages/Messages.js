import React from 'react';
import './Messages.css';

export default function Messages(props) {
  
  const badge = props.unread ? <div className="unread_count badge">{props.unread}</div> : null;

  return (
    <section className="messages">
      {props.name}
      {badge}
    </section>
  );
}