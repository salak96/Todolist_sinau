/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = ({ todo, toggleCompleted,deleteTask }) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' };
        } else {
            return { textDecoration: 'none' };
        }
    };

    return (
        <div style={styles.todoItem} >
            <input type='checkbox' style={styles.checkbox} onChange={() => toggleCompleted(todo.id)} />
            <p style={getTodoTitleStyle()}>
                {todo.title}
            </p>
            <button onClick={() => deleteTask (todo.id)} style={styles.button} >X</button>
        </div>
    );
};

const styles = {
    todoItem: {
        border: '2px solid #000000',
        fontSize: '24px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: 'auto',

    },
};

export default TodoItem;
