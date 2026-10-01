import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Report({ expenses }) {
  const categoryData = {};

  expenses.forEach((exp) => {
    if (!categoryData[exp.category]) {
      categoryData[exp.category] = 0;
    }
    categoryData[exp.category] += exp.amount;
  });

  const data = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div>
      <h2>Category Analytics</h2>

      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}

export default Report;