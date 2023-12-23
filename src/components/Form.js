import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      done: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Start Making your todo List </h3>
      <input
        type="text"
        placeholder=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="description"
        required
      ></input>
      <button>Add</button>
    </form>
  );
}
