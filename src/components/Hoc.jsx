import React, { useState } from 'react'


const UpdatedComponent = (OriginalComponent) => {
    function newComponent(){
        const [count, setCount] = useState(0);
        const increment = () =>{
            setCount(prev => prev + 1)
        }
        return <OriginalComponent count={count} incrementCount={increment}/>
    }
    return newComponent
}

export default UpdatedComponent
