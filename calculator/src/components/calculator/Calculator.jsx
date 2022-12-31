import { useState, use } from 'react'
import './Calculator.scss'

function Calculator(){
    const [val, setVal] = useState('')

    const deleteItem =()=>{
        try{
            setVal(val.slice(0, -1))
        }   catch(error){
            setVal("")
        }
        
    }
    const equal  =()=>{
        try{
            setVal(eval(val))
        } catch(error){
            setVal("Enter corect number")
        }
       
    }
    return(
        <div className="wraper">
            <div className='small-wraper'>
                <div className='desk'> {val}</div> 
                <div className="calculator-block">
                <button value='1' className='button' onClick={(e)=>setVal(val + e.target.value)}>1</button>
                <button value='2' className='button' onClick={(e)=>setVal(val + e.target.value)}>2</button>
                <button value='3' className='button' onClick={(e)=>setVal(val + e.target.value)}>3</button>
                <button value='C' className='button' onClick={deleteItem}>C/CE</button>
                <button value='4' className='button' onClick={(e)=>setVal(val + e.target.value)}>4</button>
                <button value='5' className='button' onClick={(e)=>setVal(val + e.target.value)}>5</button>
                <button value='6' className='button' onClick={(e)=>setVal(val + e.target.value)}>6</button>
                <button value='+' className='button' onClick={(e)=>setVal(val + e.target.value)}>+</button>
                <button value='7' className='button' onClick={(e)=>setVal(val + e.target.value)}>7</button>
                <button value='8' className='button' onClick={(e)=>setVal(val + e.target.value)}>8</button>
                <button value='9' className='button' onClick={(e)=>setVal(val + e.target.value)}>9</button>
                <button value='*' className='button' onClick={(e)=>setVal(val + e.target.value)}>*</button>
                <button value='.' className='button' onClick={(e)=>setVal(val + e.target.value)}>.</button>
                <button value='0' className='button' onClick={(e)=>setVal(val + e.target.value)}>0</button>
                <button value='=' className='button' onClick={equal}>=</button>
                <button value='/' className='button' onClick={(e)=>setVal(val + e.target.value)}>/</button>
            </div>
            </div>
        </div>
    )
}

export default Calculator