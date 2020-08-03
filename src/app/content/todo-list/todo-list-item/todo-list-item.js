import React from "react";

const TodoListItem = ({label, important, index}) => {

    const classNameField = `nav-item-${index} nav-item`;
    const idName = `task-${index}`;

    const style = {
        color: important? "orange" : "black"
    }

    return (
        <div className={classNameField}>
            <input type="checkbox" id={idName} name={idName} value="ok"/>
            <label htmlFor={idName} style={style}>{label}</label>
        </div>
    )
}

export default TodoListItem;