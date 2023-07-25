// src/pages/IncomePage.jsx
import React, { useState } from 'react';

const IncomePage = () => {
  const [income, setIncome] = useState('');
  const [incomeTransactions, setIncomeTransactions] = useState([]);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleAddIncome = () => {
    if (income !== '') {
      setIncomeTransactions([...incomeTransactions, parseFloat(income)]);
      setIncome('');
    }
  };

  return (
    <div>
      <h2>Income Page</h2>
      <input
        type="number"
        value={income}
        onChange={handleIncomeChange}
        placeholder="Enter income amount"
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <ul>
        {incomeTransactions.map((transaction, index) => (
          <li key={index}>Income: {transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncomePage;
