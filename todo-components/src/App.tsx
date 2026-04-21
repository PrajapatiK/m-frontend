import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState(false);

  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo(value);
    if (value.trim() !== "") {
      setError(false);
    }
  };

  const handleSubmit = () => {
    if (newTodo.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setTodos((prev: string[]) => ([...prev, newTodo]));
    setNewTodo("");
  };
  return (
    <>
      <h1 className="text-2xl font-bold m-4">Todo Component Render From Host Application</h1>
      <div className="m-2">
        <Input value={newTodo} onChange={handleChange} error={error} errorMessage="Todo cannot be empty" placeholder="Enter a new todo..." />
        <Button onClick={handleSubmit} label="Add Todo" /* disabled={!newTodo} */ />
        <List items={todos} />
      </div>
    </>
  );
}

export default App;
