import React from 'react';

function Balance(props) {
  var income = props.income;
  var expense = props.expense;
  var balance = income - expense;
  
  return (
    <div className="balance-container">
      <div className="balance-card income">
        <h3>Доходы</h3>
        <p className="amount">{income} ₽</p>
      </div>
      
      <div className="balance-card expense">
        <h3>Расходы</h3>
        <p className="amount">{expense} ₽</p>
      </div>
      
      <div className="balance-card total">
        <h3>Баланс</h3>
        <p className={'amount ' + (balance >= 0 ? 'positive' : 'negative')}>
          {balance} ₽
        </p>
      </div>
    </div>
  );
}

export default Balance;