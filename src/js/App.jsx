import { array } from "prop-types";
import React, { useState } from "react";


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

    //tomar los datos del imput

    function handleChange({ target }) {
        console.log(target.name)
        console.log(target.value)
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

    function renderButtonDelete(){
        return (<button onClick={() => { handleDeleteTask(index) }} className="btn btn-danger" >
                X
                </button>)
    }

    function handleDeleteTask(index) {
        const oneLessTask = allTasks.filter(task => task.name != allTasks[index].name)
        setAllTasks(oneLessTask)
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 ">

                        <h2>todos</h2>

                        <div className=" border border-secondary lead">
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

                                <div className="text-center pt-3">
                                    <button className="btn btn-primary w-50" type="submit">Create</button>
                                </div>
                            </form>

                            {
                                allTasks.map((item, index) => {
                                    return (
                                        <div onMouseMove={renderButtonDelete} key={index} className="border-top p-3 mt-3">
                                            <p>{item.name}</p>
                                            
                                        </div>

                                    )
                                })
                            }
                            
                            <div className="border border-secondary">
                                <h5>{allTasks.length}</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;