import React from "react";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses added</p>
      ) : (
        <ul>
          {expenses.map((exp, index) => (
            <li key={index}>
              💸 {exp.title} - ₹{exp.amount} ({exp.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;