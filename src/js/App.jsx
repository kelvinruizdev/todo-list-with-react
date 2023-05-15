import { array } from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faX
  } from '@fortawesome/free-solid-svg-icons';
  import '../styles/index.css' 


const initialStateTask = { //Un dato de uso frecuente en el componente
    fullname: "",
    description: "",
    email: "",
    github: ""
}

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

    const [isHovering, setIsHovering] = useState(false);

    //tomar los datos del imput

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

    function handleMouseOver() {
        setIsHovering(true);
      };
    
    function handleMouseOut () {
        setIsHovering(false);
    };

    return (
        <>
            <div className="container-flex bg-light">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        <p className="title">todos</p>

                        <div className=" border rounded border-secondary lead">
                            {/*Formulario*/}
                            <form onSubmit={handleSubmit} className=" p-3 mt-3" >

                                <div className="form-group">
                                    <input className="form-control"
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
                                        <div key={index} className="task-container border-top border-ligth"
                                                onMouseOver={handleMouseOver}
                                                onMouseOut={handleMouseOut}
                                                onClick={()=>{handleDeleteTask(index)}
                                                }
                                        >    
                                            <div className="float-start ms-3">
                                                <p className="">{item.name}</p>
                                            </div>  

                                            {isHovering && (
                                                <div className="float-end btn mt-1 me-5">
                                                    <FontAwesomeIcon icon={faX}  style={{color: "#000000"}}/>
                                                </div>  
                                            )}
                                                                                                                 
                                        </div>
                                    )
                                })
                                
                            }
                            
                            
                            <div className="border-top border-secondary lead">
                                <p className="ms-3">{allTasks.length} items left</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;