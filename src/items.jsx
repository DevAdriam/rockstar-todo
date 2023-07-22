import React from "react";
import Item from "./item";
const Items = ({ tasks, deleteTask, toggleTask }) => {
    return (
        <>
            <h5>Not done tasks</h5>
            <ul>
                {tasks
                    .filter((task) => !task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />;
                    })}
            </ul>

            <h5>Done Tasks</h5>
            <ul>
                {tasks
                    .filter((task) => task.done)
                    .map((task) => {
                        return <Item key={task._id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />;
                    })}
            </ul>
        </>
    );
};

export default Items;
