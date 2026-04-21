import { useState } from "react";
import List from "todo_components/List";
import Input from "todo_components/Input";
import Button from "todo_components/Button";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTodo(value);
    if (value.trim() !== "") {
      setError(false);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setTodos((prev: string[]) => ([...prev, newTodo]));
    setNewTodo("");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <h1 className="text-2xl font-bold">Todos</h1>
      <div className="border-2 rounded-lg p-4 mt-4 w-full max-w-md">
        <div className="h-full">
          <Input value={newTodo} onChange={handleChange} error={error} errorMessage="Todo cannot be empty" placeholder="Enter a new todo..." />
        </div>
        <Button onClick={handleSubmit} label="Add Todo" /* disabled={!newTodo} */ />
        <List items={todos} />
      </div>
    </div>
  );
}

export default App;