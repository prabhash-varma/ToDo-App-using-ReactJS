import React,{useState} from 'react';
import './App.css';

function App() {

  const [task,settask]=useState('');
  const [tasklist,settasklist]=useState([]);


  const addTask = ()=>{
    settasklist([...tasklist,task]);
  
  }


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <hr></hr>
      <h2>Add a Task</h2>
      <textArea cols="60" rows="8" onChange={(event)=>{
        settask(event.target.value);
      }}></textArea>
      <br></br>
      <button class="btn" onClick={addTask}>Add</button>

    <hr></hr>
    {tasklist.map((task)=>{
      return( 
        <div class="box">
          <h4>{task}</h4> 
        </div>
      
      )
     })}
  
    
    
    </div>
  );
}

export default App;
