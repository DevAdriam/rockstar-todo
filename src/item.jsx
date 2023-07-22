const Item = ({ task, deleteTask, toggleTask }) => {
    return (
        <li>
            <a
                href="#/"
                onClick={() => {
                    toggleTask(task._id);
                    console.log("click toggle");
                }}
            >
                {task.done ? "done" : "not Done"}
            </a>
            {task.subject}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
    );
};

export default Item;
