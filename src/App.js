import './App.css';
import { useState } from 'react';


function App() {

  const [tasks, addTask] = useState([]);
  const [newTask, inputTaskAdder] = useState('');

  const taskGetterFromConsole = (event) => {
    inputTaskAdder(event.target.value); //setting the input entered in console by user
  }

  const taskAdder = (newTask) => {
    addTask([...tasks, newTask]); //unpacking both arrays into one array using spread operation
  }

  const deleteTask = (task) => {
    const deletedArray = tasks.filter(item => item !== task);
    addTask([...deletedArray]); //unpacking both arrays into one array using spread operation
  }

  return (
    <div className="App">
      <div className='UpperSection'>
        {/* setting the input entered in console by user */}
        <input onChange={taskGetterFromConsole}></input>
        <button onClick={() => { taskAdder(newTask) }}>Add Task</button>
      </div>
      <div className='LowerSection'>
        <div>
          {tasks.map((eachTask) => {
            return <div>
              <h1 style={{ color: 'black' }}>{eachTask}</h1>
              <button style={{ color: 'red' }} onClick={() => { deleteTask(eachTask) }} >
                X
              </button>
            </div>
          })}
        </div>
      </div>
    </div >
  );``
}

export default App;
