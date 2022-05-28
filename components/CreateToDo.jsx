import React, { useEffect, useState } from 'react'
import { Checkbox, List, Button, Typography, Input } from 'antd'
import mobx from 'mobx'

function ToDo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])


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
    }

    // Use antd to create a form to create a new todo
    const handleSubmit = (e) => {
        console.log("submit")
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
            .then(res => res.json())
            .then(data => {
                setTodos([...todos, data])
                setTodo("")
                console.log(data)
                updateList()
            })

    }

    const handleDelete = (id) => {
        fetch(`/api/todo`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }).then(updateList())
    }

    const handleCheck = (id, completed) => {
        fetch(`/api/todo`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                done: !completed
            })
        }).then(updateList())
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Typography.Title level={2}>Create ToDo</Typography.Title>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Enter a new todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <Button type="primary" htmlType="submit">Add</Button>
            </form>
            <List
                bordered
                dataSource={todos}
                renderItem={(item) => (
                    <List.Item>
                        <Checkbox
                            checked={item.completed}
                            onChange={() => handleCheck(item.id, item.completed)}
                        >
                            {item.title}
                        </Checkbox>
                        <Button type="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                    </List.Item>
                )}
            />
        </div>


    )
}

export default ToDo
