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
        {name: "Comer"},
        {name: "Dormir"}
    ])

    //Tarea actual
    const [task, setTask] = useState({
        name: ""
    })

    //tomar los datos del imput

    function handleChange({target}) {
        console.log(target.name)
        console.log(target.value)
        setTask({
            ...task,
            [target.name]: target.value
        })
        console.log
    }

    //guarda la tarea en la lista de tareas
    function handleSubmit(event) {
        event.preventDefault()
        if(task.name.trim() != ""){
            setAllTasks([
                ...allTasks,
                task
            ]) //debe mantener la estructura array de objeto 
            setTask({name:""})
            
        }else{

        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        

                        {
                            allTasks.map((item, index)=>{
                                return(
                                    <div key={index} className="border border-secondary rounded p-3 mt-3">
                                        <h3>Tarea: {item.name}</h3>
                                    </div>
                                )
                            })
                        }

                        {/*Formulario*/}
                        <form onSubmit={handleSubmit} className="border border-secondary rounded p-3 mt-3" >

                            <h2 className="text-center">Fill in to create profile card</h2>

                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name:</label>
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

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;