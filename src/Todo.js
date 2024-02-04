import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo() {
    const [toDos, setToDos] = useState([])
    const [toDo, setToDo] = useState('')
    const date = new Date();
    const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return (
        <div>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <div className="card-body text-center">
                                <h1 className="card-title text-center">{formattedTime}</h1>
                                <h6 className="text-center">Ready to get started?</h6>
                                <div class="mt-5 row">
                                    <div className="col-3"></div>
                                    <div className="col-6 text-end">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="ENTER TASK" onChange={(e) => setToDo(e.target.value)} value={toDo} />
                                            <button className="btn btn-success mx-2" type="button" id="button-addon2" onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false, state: 'todo' }])}><i class="fa-solid fa-plus fs-3"></i></button>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card shadow">
                            <div className="card-header text-center fw-bold">To Do</div>
                            <div className="card-body">
                                {toDos.map((obj) => {
                                    if (obj.state === 'todo') {
                                        return (<div class="alert alert-secondary" role="alert">
                                            <div className="row">
                                                <div className="col-2">
                                                </div>
                                                <div className="col-7">
                                                    {obj.text}
                                                </div>
                                                <div className="col-3 text-end">
                                                    <i className="fa-solid fa-xmark fs-4" onClick={()=>{
                                                        setToDos(toDos.filter(del=>del.id !== obj.id))
                                                    }}></i> <i className="fa-solid fa-arrow-right fs-4 ms-2" onClick={(e) => {
                                                        setToDos(toDos.filter(obj3 => {
                                                            if (obj3.id === obj.id) {
                                                                obj3.state = 'in_progress'
                                                            }
                                                            return obj3
                                                        }))
                                                    }}></i>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card shadow">
                            <div className="card-header text-center fw-bold">In Progress</div>
                            <div className="card-body">
                                {toDos.map((obj) => {
                                    if (obj.state === 'in_progress') {
                                        return (
                                            <div className="alert alert-warning" role="alert">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <i className="fa-solid fa-arrow-left fs-4" onClick={()=>{
                                                            setToDos(toDos.filter(mov=>{
                                                                if(mov.id === obj.id){
                                                                    mov.state ='todo'
                                                                }
                                                                return mov
                                                            }))
                                                        }}></i>
                                                    </div>
                                                    <div className="col-7">
                                                        {obj.text}
                                                    </div>
                                                    <div className="col-3 text-end">
                                                        <i className="fa-solid fa-xmark fs-4" onClick={()=>{
                                                            setToDos(toDos.filter(del=>del.id !== obj.id))
                                                        }}></i> <i className="fa-solid fa-arrow-right fs-4 ms-2" onClick={() => {
                                                            setToDos(toDos.filter(obj5 => {
                                                                if (obj5.id === obj.id) {
                                                                    obj5.state = 'done'
                                                                }
                                                                return obj5
                                                            }))
                                                        }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card shadow">
                            <div className="card-header text-center fw-bold">Done</div>
                            <div className="card-body">
                                {toDos.map((obj) => {
                                    if (obj.state == 'done') {
                                        return (
                                            <div class="alert alert-success" role="alert">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <i className="fa-solid fa-arrow-left fs-4" onClick={()=>{
                                                            setToDos(toDos.filter(mov=>{
                                                                if(mov.id === obj.id){
                                                                    mov.state = 'in_progress'
                                                                }
                                                                return mov
                                                            }))
                                                        }}></i>
                                                    </div>
                                                    <div className="col-8" style={{ textDecoration: 'line-through' }}>
                                                        {obj.text}
                                                    </div>
                                                    <div className="col-2 text-end">
                                                        <i className="fa-solid fa-xmark fs-4" onClick={()=>{
                                                            setToDos(toDos.filter(del=>del.id !== obj.id))
                                                        }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo