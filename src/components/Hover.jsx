import React from 'react'
import UpdatedComponent from './hoc'

function Hover({count, incrementCount}) {

  return (
    <div>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    </div>
  )
}

export default UpdatedComponent(Hover)