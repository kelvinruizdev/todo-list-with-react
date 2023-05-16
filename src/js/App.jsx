import { array } from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faX
  } from '@fortawesome/free-solid-svg-icons';
  import '../styles/index.css' 

function App() {
    //Guardar todas las tareas
    const [allTasks, setAllTasks] = useState([
        { name: "Comer" },
        { name: "Dormir" }
    ])

    //Tarea actual
    const [task, setTask] = useState({
        name: ""
    })

    function handleChange({ target }) {
        setTask({
            ...task,
            [target.name]: target.value,
        })
        console.log
    }

    //guarda la tarea en la lista de tareas
    function handleSubmit(event) {
        event.preventDefault()
        if (task.name.trim() != "") {
            setAllTasks([
                ...allTasks,
                task
            ]) //debe mantener la estructura array de objeto 
            setTask({ name: "" })

        } else {

        }
    }

    function handleDeleteTask(index) {
        const oneLessTask = allTasks.filter(task => task.name != allTasks[index].name)
        setAllTasks(oneLessTask)
    }

    return (
        <>
            <div className="container-flex bg-light">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        <p className="title">todos</p>

                        <div className="  lead box-shadow">
                            {/*Formulario*/}
                            <form onSubmit={handleSubmit} className=" p-3 mt-3" >

                                <div className="form-group lead">
                                    <input className=""
                                        placeholder="What needs to be done?"
                                        id="name"
                                        type="text"
                                        onChange={handleChange}
                                        name="name"
                                        value={task.name}
                                    />
                                </div>
                            </form>

                            {                                 
                                allTasks.map((item, index) => {
                                    return (
                                        <div key={index} className="task-container border-top border-ligth">    
                                            <div className="task-container--delete ">
                                                <p className="">{item.name}</p>
                                                <div className="delete-task btn"
                                                    onClick={()=>{handleDeleteTask(index)}}
                                                >
                                                    <FontAwesomeIcon icon={faX} style={{color: "#000000"}}/>
                                                </div> 
                                            </div>                                  
                                        </div>
                                    )
                                })   
                            }
                            {
                                allTasks.length == 0 ? (
                                            <div className="border-top border-secondary text-secondary lead">
                                                <p className="ms-3 ">No tasks, add a task</p>
                                            </div>  
                                        ):(
                                            <div className="border-top border-secondary text-secondary lead">
                                                <p className="ms-3">{allTasks.length} items left</p>
                                            </div>
                                        )
                            }
                            
                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;