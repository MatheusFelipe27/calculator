import React, {useEffect, useState} from 'react';
import './App.scss';

function App(){
  const [displayed, setDisplayed] = useState("")
  const [operation, setOperation] = useState("")
  const [prev, setPrev] = useState()
  const [def, setDef] = useState(true)

  useEffect(() =>{
    const root = document.documentElement
    root.style.setProperty('--body-color', def? '#3B4664': '#E6E6E6')
    root.style.setProperty('--slider-background', def? '#252D44': '#D7CBCB')
    root.style.setProperty('--slider-toggle', def? '#CA4330': '#F58E3F')
    root.style.setProperty('--outside-color', def? '#643B5F': '#C7CEC3')
    root.style.setProperty('--outside-shadow', def? '#4D2D49': '#c7c7c3')
    root.style.setProperty('--col-val-theme', def? '#FEFFFD': '#3C3C3A')
    root.style.setProperty('--ans-partial', def? '#181F32': '#EEEEEE')
    root.style.setProperty('--numbers', def? '#252D44': '#EEEEEE')
    root.style.setProperty('--btn-background', def? '#EAE3DB': '#E5E4E0')
    root.style.setProperty('--btn-color', def? '#474956': '#36362E')
    root.style.setProperty('--btn-shadow', def? '#B6A49A': '#A59C93')
    root.style.setProperty('--res-del-background', def? '#647299': '#388187')
    root.style.setProperty('--res-del-color', def? '#FBFFFF': '#FBFFFF')
    root.style.setProperty('--res-del-shadow', def? '#414E71': '#1E616A')
    root.style.setProperty('--equal-background', def? '#D13F30': '#C85401')
    root.style.setProperty('--equal-color', def? '#FBFFFF': '#FFFCFA')
    root.style.setProperty('--equal-shadow', def? '#96271C': '#8A3B00')
    root.style.setProperty('--res-del-hover', def? '#A2B3E1': '#62B4BF')
    root.style.setProperty('--btn-hover', def? '#FFFFFF': '#FFFFFF')
    root.style.setProperty('--equal-hover', def? '#F96C5B': '#FF8B38')


  }, [def])

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
      setDisplayed(op===0? "0": op)    
    }
    else if(operation==='-'){
      op = parseFloat(prev)-parseFloat(displayed)
      setDisplayed(op===0? "0": op)    
    }
    else if(operation==='*'){
      op = parseFloat(prev)*parseFloat(displayed)
      setDisplayed(op===0? "0": op)    
    }
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
    <>
      <div className='toggle-div'>
        <h5 className='theme'>theme</h5>
      <label className="switch">
        <input type="checkbox" onClick={()=> setDef(!def)}/>
        <span className="slider round"></span>
      </label>
      </div>
      <div className='outside'>
        <div className='main'>
          <div>
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
      </div>
    </>

  );
}

export default App;
