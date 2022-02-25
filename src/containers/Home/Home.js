import React from 'react';
import { ToDoGroup, AddItemForm } from '../../components';
import { to_do_groups } from '../../constants';
import './Home.css';

function Home() {
    const [formModalVisiblity, setFormModalVisiblity] = React.useState(false);
    const [formModalData, setFormModalData] = React.useState('');
    const setFormModalState = (visibility, target) => {
        setFormModalVisiblity(visibility);
        setFormModalData(target);
    };

    return (
        <div className="app_home">
            {to_do_groups.map((to_do_group) => (
                <ToDoGroup key={to_do_group.uid} data={to_do_group} setFormModalState={setFormModalState} />
            ))}
            {formModalVisiblity && <AddItemForm target={formModalData} setFormModalVisiblity={setFormModalVisiblity} />}
        </div>
    )
}

export default Home;