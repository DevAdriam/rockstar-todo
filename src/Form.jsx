import React, { useRef } from "react";

const Form = ({ addTask }) => {
    const input = useRef();
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                const subject = input.current.value;
                addTask(subject);

                input.current.value = "";
                input.current.focus();
            }}
        >
            <input type="text" ref={input} />
        </form>
    );
};

export default Form;
