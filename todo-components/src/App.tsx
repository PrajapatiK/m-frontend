import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setItem(value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);
    setItems((prevItems) => [...prevItems, item]);
    setItem("");
  };

  return (
    <>
      <Input value={item} onChange={handleChange} onSubmit={handleSubmit} />
      <List items={items} />
    </>
  );
}

export default App;
