import React, {useState} from 'react';
import './App.scss';

function App(){
  const [displayed, setDisplayed] = useState("")
  const [operation, setOperation] = useState("")
  const [prev, setPrev] = useState()

  const concat = (e) =>{
    var val = e.target.value
    setDisplayed(displayed+val)
  }

  const result = () =>{
    var op
    if(operation==='+'){
      op = parseFloat(prev)+parseFloat(displayed)
      setDisplayed(op===0? "0": op)
    }
    else if(operation==='/'){
      op = parseFloat(prev)/parseFloat(displayed)
      setDisplayed(op==0? "0": op)    }
    else if(operation==='-'){
      op = parseFloat(prev)-parseFloat(displayed)
      setDisplayed(op===0? "0": op)    }
    else if(operation==='*'){
      op = parseFloat(prev)*parseFloat(displayed)
      setDisplayed(op===0? "0": op)    }
    setOperation("")
  }

  const del = () =>{
    if(displayed[displayed.length-1]==='r') setDisplayed("")
    else{
      let lastPos = displayed.toString().slice(0, -1)
      setDisplayed(lastPos)
    }
  }

  const operate = (e) =>{
    let val = e.target.value
    if(displayed==="Error")del()
    else if(displayed!==""){
      setOperation(val)
      setPrev(parseFloat(displayed))
      setDisplayed("")
    }
    else{
      if(['/', '*', '+'].includes(val)){
        setDisplayed("Error")
      }
      else setDisplayed(val)
    }
  }
  
  const reset =() =>{
    setDisplayed("")
    setOperation("")
    setPrev()
  }

  return (
    <div className='main'>
      <div className='info'>
          <h3 className='col'>calc</h3>
      </div>
      <div className='ans'>
        <div className='partial'>
          <h6 className='partial-val'>{operation? operation : ""}</h6>
        </div>
          <h4 className='displayed-val'>{displayed? displayed: ""}</h4>
      </div>
      <div className='numbers'>
          <button className='btn' value='7'onClick={(e)=> concat(e)}> 7</button>
          <button className='btn' value='8' onClick={ (e)=> concat(e)}> 8</button>
          <button className='btn' value='9' onClick={(e)=> concat(e)}> 9</button>
          <button className='del-btn' onClick={del}> del</button>
          <button className='btn' value='4' onClick={(e)=> concat(e)}> 4</button>
          <button className='btn' value='5' onClick={(e)=> concat(e)}> 5</button>
          <button className='btn' value='6' onClick={(e)=> concat(e)}> 6</button>
          <button className='btn' value='+' onClick={(e)=> {operate(e) }}> +</button>
          <button className='btn' value='1' onClick={(e)=> concat(e)}> 1</button>
          <button className='btn' value='2' onClick={(e)=> concat(e)}> 2</button>
          <button className='btn' value='3' onClick={(e)=> concat(e)}> 3</button>
          <button className='btn' value='-' onClick={(e)=> operate(e) }> -</button>
          <button className='btn' value='.' onClick={(e)=> concat(e)}> .</button>
          <button className='btn' value='0' onClick={(e)=> concat(e)}> 0</button>
          <button className='btn' value='/' onClick={(e)=> operate(e)}> /</button>
          <button className='btn' value='*' onClick={(e)=> operate(e)}> x</button>
          <button className='res-btn' onClick={reset}> reset</button>
          <button className='equal-btn' onClick={result}> =</button>
      </div>
    </div>
  );
}

export default App;
