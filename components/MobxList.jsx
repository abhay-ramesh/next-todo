import store from "../lib/mobx";
import { observer } from "mobx-react-lite";

import React, { useEffect } from 'react'

function MobxList() {
    // useEffect(() => {
    //     store.loadTodos();
    // }, []);
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm">
                {store.todos.map(todo => (
                    <div className="w-full max-w-sm justify-center" >
                        <div className={todo.completed ? "bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" : "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
                            <div className="flex justify-between items-center space-x-8">
                                <p className={todo.completed ? "text-gray-700 text-sm font-bold line-through overflow-clip" : "text-gray-700 text-sm font-bold overflow-clip"} >{todo.title}</p>
                                <div className="flex items-center space-x-4">
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => store.toggleTodo(todo.ida)}
                                        />
                                    </div>
                                    {/* <p className="text-gray-700 text-sm font-bold">{todo.ida}</p> */}
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => store.removeTodo(todo.ida)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const MobxListObserver = observer(MobxList)

export default MobxListObserver
