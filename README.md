# eisenhower-matrix-todo-app
This is a todo app which simulate the Eisenhower matrix.

## Info
The app has grouped items into 4 section. Each section show the count of items under that section. It uses form to add items in different section. It also has drag and drop feature to move items between sections. The app uses redux to manage state and able to retain the state after refreshing page. Demo test cases are present.

## Technologies
* React JS 17.0
* react-redux 7.2
* beautiful-dnd 13.1
--dev
* cypress 9.5
* testing-library/cypress 8.0


## Setup
Open cli and use these commands:
```shell
git clone https://github.com/amitabh-sahu/eisenhower-matrix-todo-app.git
cd eisenhower-matrix-todo-app
npm install
```
To start the app:
```shell
npm start
```
To run demo test case:
```shell
./node_modules/.bin/cypress open
```