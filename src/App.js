import React, { useState, useEffect } from 'react';
import AddOperationForm from './components/AddOperationForm';
import OperationList from './components/OperationList';
import Balance from './components/Balance';
import './App.css';

function App() {
  // Загружаем данные из localStorage при старте
  var savedOperations = localStorage.getItem('operations');
  var initialOperations = [];
  if (savedOperations) {
    initialOperations = JSON.parse(savedOperations);
  }
  
  var [operations, setOperations] = useState(initialOperations);
  var [operationType, setOperationType] = useState('income');
  
  // Сохраняем в localStorage при каждом изменении
  useEffect(function() {
    localStorage.setItem('operations', JSON.stringify(operations));
  }, [operations]);
  
  // Добавление операции
  function handleAddOperation(newOperation) {
    var newOperations = [];
    for (var i = 0; i < operations.length; i++) {
      newOperations.push(operations[i]);
    }
    newOperations.push(newOperation);
    setOperations(newOperations);
  }
  
  // Удаление операции
  function handleDeleteOperation(id) {
    var newOperations = [];
    for (var i = 0; i < operations.length; i++) {
      if (operations[i].id !== id) {
        newOperations.push(operations[i]);
      }
    }
    setOperations(newOperations);
  }
  
  // Смена типа операции
  function handleTypeChange(event) {
    setOperationType(event.target.value);
  }
  
  // Подсчёт доходов и расходов
  var totalIncome = 0;
  var totalExpense = 0;
  for (var i = 0; i < operations.length; i++) {
    var op = operations[i];
    if (op.type === 'income') {
      totalIncome = totalIncome + op.amount;
    } else {
      totalExpense = totalExpense + op.amount;
    }
  }
  
  return (
    <div className="App">
      <h1>💰 Учёт личных финансов</h1>
      
      <Balance 
        income={totalIncome} 
        expense={totalExpense} 
      />
      
      <AddOperationForm
        onAddOperation={handleAddOperation}
        operationType={operationType}
        onTypeChange={handleTypeChange}
      />
      
      <OperationList
        operations={operations}
        onDeleteOperation={handleDeleteOperation}
      />
    </div>
  );
}

export default App;