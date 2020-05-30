import React from 'react'
import './Demonym.css'

export default function Demonym(props) {
  return (
    <div className="demonym">
      A <b>{props.name}</b> comes from <b>{props.country}</b>
    </div>
  )
}