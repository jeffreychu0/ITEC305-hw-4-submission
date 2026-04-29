import './App.css'
import { Todo } from "./components/Todo";

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

function App() {
    return (
        <ul>
            {DUMMY_TODOS.map((item) => <Todo text={item} />)}
        </ul>
    );
}


export default App;
