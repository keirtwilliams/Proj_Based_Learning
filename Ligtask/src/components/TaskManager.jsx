 import { useState } from "react";
 import './TaskManager.css'; 
function TaskManager(){
   const [tasks, setTask] = useState([]);
    const [addNew, setNewTask] = useState("");
      
      const handleInputChange = (event) => {
             setNewTask(event.target.value);
      } 
      
     const handleAddTask = () => {
      if(addNew.trim() !== ""){
      setTask( t => [...t, addNew]);
      setNewTask("");
     }
    }
     const  handleDelTask = (index) => {
         const updatedTasks = tasks.filter((_, i) => i !== index);
            setTask(updatedTasks);
        }     
    return(
        <div className="container">

          <h1> Ligtask</h1>
        <input className="input-task"
         type="text"
         value={addNew}
         placeholder="Add Task...."
         onChange={(handleInputChange)}
        />
         <button className="add-task" onClick={handleAddTask}>Add</button>

            <ul>
         {tasks.map((task, index) => (
           <li className="list" key={index}>
              <span className="text">{task}</span> 
              <button className="delete-btn" onClick={() => handleDelTask(index)}>Delete</button>
            </li>
           
          ))}
          </ul>
        </div>
    );
}
export default TaskManager;