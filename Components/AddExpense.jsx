import React, { useState } from "react";

function AddExpense({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) return;

    const newExpense = {
      title,
      amount: Number(amount),
      category,
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">➕ Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;