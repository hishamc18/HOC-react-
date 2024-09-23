import React from 'react'
import UpdatedComponent from './hoc';

function Counter({count, incrementCount}) {

  return (
    <div>
      <button onClick={incrementCount}>Button Clicked {count} times</button>
    </div>
  )
}

export default UpdatedComponent(Counter)
