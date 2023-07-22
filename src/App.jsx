import { useState } from "react";
import Items from "./items";
import Form from "./Form";
import { Container } from "@mui/material";
import Header from "./header";
//props are readonly data
const initialState = [
    {
        _id: 1,
        subject: "Milk",
        done: true,
    },
    {
        _id: 2,
        subject: "Butter",
        done: true,
    },
    {
        _id: 3,
        subject: "Pudding",
        done: false,
    },
    {
        _id: 4,
        subject: "Cheese",
        done: false,
    },
];

const App = () => {
    const [tasks, setTasks] = useState(initialState);

    const deleteTask = (_id) => {
        setTasks(tasks.filter((task) => task._id !== _id));
    };

    const toggleTask = (_id) => {
        setTasks(
            tasks.map((task) => {
                if (task._id === _id) task.done = !task.done;
                return task;
            })
        );
    };

    const addTask = (subject) => {
        const _id = tasks[tasks.length - 1]._id + 1;
        setTasks([...tasks, { _id, subject, done: false }]);
    };

    return (
        <div>
            <Header />
            <Container>
                <h1>Todo App</h1>
                <Form addTask={addTask} />
                <Items tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
            </Container>
        </div>
    );
};

export default App;
