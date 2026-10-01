import React, { useState } from "react";

function Budget({ expenses }) {
  const [budget, setBudget] = useState("");

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - total;

  return (
    <div>
      <h2>Monthly Budget</h2>

      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <h3>Total Expense: ₹{total}</h3>
      <h3>Remaining: ₹{remaining}</h3>

      {remaining < 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          ⚠ Budget Exceeded!
        </p>
      )}
    </div>
  );
}

export default Budget;