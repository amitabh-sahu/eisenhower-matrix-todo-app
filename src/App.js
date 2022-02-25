import React from 'react';
import { Home } from './containers';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_TODO } from './constants';
import './App.css';

function App() {
  const allToDoSection = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const targetItem = allToDoSection[source.droppableId][source.index];

    const updatedSourceToDoSection = allToDoSection[source.droppableId];
    updatedSourceToDoSection.splice(source.index, 1);

    const updatedDestinationToDoSection = allToDoSection[destination.droppableId];
    updatedDestinationToDoSection.splice(destination.index, 0, targetItem);

    dispatch({ type: UPDATE_TODO, target: source.droppableId, data: updatedSourceToDoSection });
    dispatch({ type: UPDATE_TODO, target: destination.droppableId, data: updatedDestinationToDoSection });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <div className='app_title'>To Do App</div>
        <Home />
      </div>
    </DragDropContext>
  );
}

export default App;