import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../constants';
import { v4 as uuidv4 } from 'uuid';
import './AddItemForm.css';

function AddItemForm({ target, setFormModalVisiblity }) {
    const [task, setTask] = React.useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD_TODO, target, data: { uid: uuidv4(), task, isDone: false } });
        setFormModalVisiblity(false);
    };

    return (
        <div className="add_item-modal-container">
            <form className={`add_item-modal modal-${target}`} onSubmit={handleSubmit}>
                <div className="field">
                    <label>Enter task you want to add:</label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="task"
                        onChange={(e) => setTask(e.target.value)}
                        value={task || ""}
                        required
                    />
                </div>
                <div>
                    <button type="submit">&#x2713;</button>
                    <button onClick={() => setFormModalVisiblity(false)}>&#x2717;</button>
                </div>
            </form>
        </div>
    )
}

export default AddItemForm;