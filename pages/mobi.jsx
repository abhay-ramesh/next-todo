// Create mobx todo app
import store from "../lib/mobx";
import { observer } from "mobx-react-lite";
import React from 'react'

function mobi() {
    const handleSubmit = (e) => {
        e.preventDefault();
        store.addTodo();
    }
    return (
        <>
            <h1>Mobx Todo App</h1>
            <div>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        value={store.newTodo}
                        onChange={e => (store.newTodo = e.target.value)}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
            <div>
                <ul>
                    {store.todos.map(todo => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => store.toggleTodo(todo.id)}
                            />
                            {todo.title}
                            <button onClick={() => store.removeTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default observer(mobi)