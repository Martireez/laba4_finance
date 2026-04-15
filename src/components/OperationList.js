import React from 'react';
import OperationItem from './OperationItem';

function OperationList(props) {
  var operations = props.operations;
  
  if (operations.length === 0) {
    return (
      <div className="operation-list">
        <h2>История операций</h2>
        <p className="empty-message">Операций пока нет</p>
      </div>
    );
  }
  
  var operationElements = [];
  for (var i = 0; i < operations.length; i++) {
    var op = operations[i];
    operationElements.push(
      <OperationItem
        key={op.id}
        operation={op}
        onDelete={props.onDeleteOperation}
      />
    );
  }
  
  return (
    <div className="operation-list">
      <h2>История операций</h2>
      {operationElements}
    </div>
  );
}

export default OperationList;