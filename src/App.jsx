import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = () => {
    if (!input.trim()) return;

    setTodo([...todo, input]);
    setInput("");
  };

  const move = (item, from, setFrom, to, setTo) => {
    setFrom(from.filter((x) => x !== item));
    setTo([...to, item]);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        <h2>Todo</h2>
        {todo.map((item, i) => (
          <p key={i}>
            {item}
            <button
              onClick={() =>
                move(item, todo, setTodo, progress, setProgress)
              }
            >
              Next
            </button>
          </p>
        ))}
      </div>

      <div>
        <h2>Progress</h2>
        {progress.map((item, i) => (
          <p key={i}>
            {item}
            <button
              onClick={() =>
                move(item, progress, setProgress, todo, setTodo)
              }
            >
              Previous
            </button>
            <button
              onClick={() =>
                move(item, progress, setProgress, done, setDone)
              }
            >
              Next
            </button>
          </p>
        ))}
      </div>

      <div>
        <h2>Done</h2>
        {done.map((item, i) => (
          <p key={i}>
            {item}
            <button
              onClick={() =>
                move(item, done, setDone, progress, setProgress)
              }
            >
              Previous
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;