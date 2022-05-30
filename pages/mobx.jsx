// MobX Implementaiton of Todo App
import React from "react";
import MobxCreate from "../components/MobxCreate";
import MobxListObserver from "../components/MobxList";
import MobxLoadAPI from "../components/MobxLoadAPI";

function mobxTest() {
    return (
        <div className="w-screen min-h-screen bg-green-800 flex justify-center">
            <div className="w-full max-w-md mx-4">
                <MobxCreate />
                <MobxListObserver />
                <MobxLoadAPI />
            </div>
        </div>
    );
}

export default mobxTest