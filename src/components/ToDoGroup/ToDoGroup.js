import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import './ToDoGroup.css';
import { ToDo } from '../';

function ToDoGroup({ data, setFormModalState }) {
    const targetTodo = useSelector((state) => state[data.uid]);

    return (
        <div className={`todo_group ${data.uid}`}>
            <h3 className="todo_group-title">{data.title}</h3>
            <div className="todo_group-taskbox">
                <div className="todo_group-taskbox-sidebar">
                    <span>{targetTodo.length}</span>
                    <p>{data.tag}</p>
                </div>
                <Droppable droppableId={data.uid}>
                    {(provided, snapshot) => (
                        <div
                            id={`droppable-box-${data.uid}`}
                            className={`todo_group-taskbox-todo-container container-${data.uid} ${snapshot.isDraggingOver && 'dragging-over'}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {targetTodo.length > 0 ? (
                                <div className="todo_group-taskbox-todo">
                                    {targetTodo.map((todoData, index) => (
                                        <ToDo key={todoData.uid} index={index} target={data.uid} todoData={todoData} />
                                    ))}
                                </div>
                            ) : (
                                <p className="todo_group-taskbox-empty">{data.description}</p>
                            )}
                        </div>
                    )}
                </Droppable>
            </div>
            <div className="add_item-button" onClick={() => setFormModalState(true, data.uid)}>+</div>
        </div>
    )
}

export default ToDoGroup;