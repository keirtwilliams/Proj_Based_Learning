import { useState } from "react";

function TodoList(){

     // useState hook to manage the list of tasks.
     // 'add' is the current array of tasks.
     // 'setAdd' is the function to update the 'add' array.
     const [add, setAdd] = useState([]);

     // useState hook to manage the current value of the input field.
     // 'task' holds the current text entered by the user.
     // 'setTask' updates the 'task' value as the user types.
     const [task, setTask] = useState("");


     // handleTask function is called when the "Add" button is clicked.
     // It checks if the input is not just empty spaces.
     // If valid, it adds the current 'task' to the 'add' array using the spread operator,
     // which creates a new array with all previous tasks plus the new one.
     // After adding, it clears the input field by setting 'task' to an empty string.
     const handleTask  = () => {
        if(task.trim() !== ""){
            setAdd(a => [...a, task]);
            setTask("");
        }
     }   
     // handleDelete function is called when the "Delete" button next to a task is clicked.
     // It receives the index of the task to be deleted.
     // It creates a new array by filtering out the task at the given index.
     // Only tasks whose index does not match the provided index are kept.
     // The updated array is then set as the new value for 'add'.
     const handleDelete = (index) => {
          const newUpdatedTask = add.filter((_, i) => i !== index);
          setAdd(newUpdatedTask);
     }
 
    return(
        <>
        <h1>StudyHub</h1>

        {/* Input field for entering a new task.
            Its value is controlled by the 'task' state.
            onChange updates 'task' as the user types. */}
        <input className="container"
         type="text"
         value={task}
         placeholder="Add task.."
         onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-task" onClick={handleTask}>Add</button>

        {/* unordered list displaying all tasks.*/}  
        <ul>
            {add.map((Add, index) => (
                <li className="newlist" key={index}>
                    <span className="newTast">{Add}</span>
                    <button className="del-btn" 
                    onClick={() => handleDelete(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
        </>
    );
}
export default TodoList;