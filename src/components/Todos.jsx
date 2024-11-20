/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem.jsx';
// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTask }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTask={deleteTask}
                    />
                );
            })} 
        </div>
    );
};

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
};

export default Todos;
