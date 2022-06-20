import React,{useState} from 'react';
import './App.css';

function App() {

  const [task,settask]=useState('');
  const [tasklist,settasklist]=useState([]);


  const addTask = ()=>{
    settasklist([...tasklist,task]);
  
  }

  const removeTask =()=>{
    settasklist([])
  }


  return (
    <div className="App">
     
      <h1> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETmar4rq8KLkhHzhxG-6si0x7z6de4PJJFdbIIH7dYF00-ajglV7T1mkreYfCC2PmI1E&usqp=CAU"></img>ToDo List</h1>
      

      <div id="addbox">
      <h2>Add a Task</h2>
      <textArea id="textbox" cols="60" rows="8" onChange={(event)=>{
        if(event!==''){
        settask(event.target.value);
        }
      }}></textArea>
      <br></br>
      <button class="btn" onClick={addTask}>Add</button>
      <button class="btn" onClick={removeTask}>Clear All</button>
      <br></br>
      <br></br>
      </div>

    
    

    {tasklist.map((task)=>{
      if(task!==''){
        return( 
          <div class="box">
            <h4>{task}</h4> 
          </div>
        
        )
      }
       })
    }
    
    
  
    
    
    </div>
  );
}

export default App;
