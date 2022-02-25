const UPDATE_TODO = 'UPDATE_TODO';
const ADD_TODO = 'ADD_TODO';

const intial_state = {
    'do-first': [],
    'schedule': [],
    'delegate': [],
    'do-not-do': [],
};

const to_do_groups = [
    {
        uid: `do-first`,
        title: `Do First`,
        tag: `Urgent and importent`,
        description: `First focus on important tasks to be done the same day.`,
    },
    {
        uid: `schedule`,
        title: `Schedule`,
        tag: `Less urgent but importent`,
        description: `Important, but not-so-urgent stuff should be scheduled.`,
    },
    {
        uid: `delegate`,
        title: `Delegate`,
        tag: `Urgent but less importent`,
        description: `What's urgent, but less important, delegate to others.`,
    },
    {
        uid: `do-not-do`,
        title: `Don't Do`,
        tag: `Neither urgent nor important`,
        description: `What's neither urgent nor important, don't do at all.`,
    },
];

export { UPDATE_TODO, ADD_TODO, intial_state, to_do_groups };