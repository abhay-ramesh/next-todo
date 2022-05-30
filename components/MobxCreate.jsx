import store from "../lib/mobx";
import { observer } from "mobx-react-lite";
import React from 'react'

function MobxCreate() {
    const handleSubmit = (e) => {
        e.preventDefault();
        store.addTodo();
    }
    return (
        <div className="flex justify-center mt-8">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Todo App
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={store.newTodo}
                            onChange={e => (store.newTodo = e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default observer(MobxCreate)