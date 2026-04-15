import React from 'react';

function OperationItem(props) {
  var operation = props.operation;
  var amountClass = operation.type === 'income' ? 'amount-income' : 'amount-expense';
  var sign = operation.type === 'income' ? '+' : '-';
  
  return (
    <div className="operation-item">
      <div className="operation-info">
        <span className="operation-category">{operation.category}</span>
        <span className="operation-date">{operation.date}</span>
      </div>
      <div className={amountClass}>
        {sign} {operation.amount} ₽
      </div>
      <button 
        onClick={function() { props.onDelete(operation.id); }}
        className="btn-delete"
      >
        Удалить
      </button>
    </div>
  );
}

export default OperationItem;