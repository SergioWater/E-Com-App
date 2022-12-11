import React, {useState} from 'react'

function Counter(){

    const [arr, setArr] = useState([])

    function addplus(){
        setArr( prevArr => [... prevArr, "+"])
    }
    function addMinus(){
        setArr( prevArr => [... prevArr, "-"])
        
    }
    return(
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addplus}>+</button>
            {arr.toString()}
        </div>
        )

}
export default Counter