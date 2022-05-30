import React from 'react'
import store from '../lib/mobx'

function MobxLoadAPI() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => store.loadTodos()}>
                    Load Todos from API
                </button>
            </div>
        </div>
    )
}

export default MobxLoadAPI