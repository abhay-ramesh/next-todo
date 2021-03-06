import { useState, useEffect } from "react";

function ToDoTailwind() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isUpdating, setIsUpdating] = useState(false)

    const updateTodosState = (func, id, completed, todo) => {
        console.log(func, id, completed, todo)
        setIsLoading(true)
        if (func === "add") {
            // Append new todo to the list
            setTodos([...todos, { completed: completed, title: todo }])
        } else if (func === "check") {
            // Update the todo's completed state
            setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
        } else if (func === "delete") {
            // Remove the todo from the list
            setTodos(todos.filter(todo => todo.id !== id))
        }
        setIsLoading(false)
    }



    useEffect(() => {
        fetch("/api/todo")
            .then(res => res.json())
            .then(data => setTodos(data))
    }
        , [])

    // Fecth the list of todos if handleSubmit or handleDelete is called
    const updateList = () => {
        fetch("/api/todo")
            .then(res => res.json())
            .then(data => setTodos(data))
        setIsUpdating(false)
    }

    // Use antd to create a form to create a new todo
    const handleSubmit = (e) => {
        console.log("submit")
        // console.log(todos.length)
        // console.log("fdgdfg", (todos[todos.length].id))
        // updateTodosState("add", "", false, todo)
        e.preventDefault()
        fetch("/api/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: todo
            })
        })
            // .then(res => res.json())
            // .then(data => {
            //     setTodo("")
            //     console.log(data)
            //     updateList()
            // })
            .then(res => res.json())
            .then(data => {
                setTodos([...todos, data])
                setTodo("")
                console.log(data)
                updateList()
            })
    }

    const handleDelete = (id) => {
        // updateTodosState("delete", id)
        setIsUpdating(true)
        fetch(`/api/todo`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(updateList())
    }

    const handleCheck = (id, completed) => {
        setIsUpdating(true)
        fetch(`/api/todo`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                done: !completed
            })
        })
            .then(updateList())
    }

    return (
        <div className="w-screen h-screen bg-green-800 flex justify-center">
            <div className="flex-col mt-12 mx-6">
                <div className="flex justify-center">
                    <div className="w-full max-w-sm">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Todo App
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title" type="text" placeholder="Task" value={todo} onChange={e => setTodo(e.target.value)} />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" disabled={todo === ""}>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {isUpdating ? <div className="text-center"><svg class="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.
                            6.627 9.621 11.95 9.621 11.95s-5.303-4.629-5.303-11.95c0-6.627 5.303-11.95 5.303-11.95s-9.621 5.373-9.621 11.95z" /></svg></div> :
                    <div className="flex flex-col justify-center">
                        {todos.map(todo => (
                            <div className="w-full max-w-sm justify-center" >
                                {/* onClick={() => handleCheck(todo.id, todo.completed)} */}
                                <div className={todo.completed ? "bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" : "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
                                    <div className="flex justify-between items-center space-x-8">
                                        {/* check box */}
                                        {/* <p>{todo.id}</p> */}
                                        <p className={todo.completed ? "text-gray-700 text-sm font-bold line-through overflow-clip" : "text-gray-700 text-sm font-bold overflow-clip"} >{todo.title}</p>
                                        <div className="flex items-center space-x-4">
                                            {/* <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(todo.id, todo.completed)} /> */}
                                            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                onClick={() => handleCheck(todo.id, todo.completed)}>
                                                Done
                                            </button> */}
                                            <div className="form-check">
                                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" checked={todo.completed} onChange={() => handleCheck(todo.id, todo.completed)} />
                                            </div>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                onClick={() => handleDelete(todo.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default ToDoTailwind