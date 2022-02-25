import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_TODO } from '../../constants';
import './ToDo.css';

function ToDo({ target, todoData, index }) {
    const targetTodo = useSelector((state) => state[target]);
    const dispatch = useDispatch();

    const handleIsDoneChange = (uid) => {
        const updatedTargetTodo = targetTodo.map((todo) => {
            if (todo.uid === uid) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });
        dispatch({ type: UPDATE_TODO, target, data: updatedTargetTodo });
    };

    const handleDeleteToDo = (uid) => {
        const updatedTargetTodo = targetTodo.filter((todo) => todo.uid !== uid);
        dispatch({ type: UPDATE_TODO, target, data: updatedTargetTodo });
    };

    return (
        <Draggable draggableId={todoData.uid} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`todo_group-task ${snapshot.isDragging && 'dragging'}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <input type="checkbox" onChange={() => handleIsDoneChange(todoData.uid)} checked={todoData.isDone} />
                    <p>{todoData.task}</p>
                    <span onClick={() => handleDeleteToDo(todoData.uid)}>&#x2715;</span>
                </div>
            )}
        </Draggable>
    )
}

export default ToDo;