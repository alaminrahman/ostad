// src/pages/ExpensePage.jsx
import React, { useState } from 'react';

const ExpensePage = () => {
  const [expense, setExpense] = useState('');
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleAddExpense = () => {
    if (expense !== '') {
      setExpenseTransactions([...expenseTransactions, parseFloat(expense)]);
      setExpense('');
    }
  };

  return (
    <div>
      <h2>Expense Page</h2>
      <input
        type="number"
        value={expense}
        onChange={handleExpenseChange}
        placeholder="Enter expense amount"
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenseTransactions.map((transaction, index) => (
          <li key={index}>Expense: {transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensePage;
