import React from 'react';
import { categories } from '../data/categories';

function AddOperationForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    
    var form = event.target;
    var type = form.type.value;
    var category = form.category.value;
    var amount = parseFloat(form.amount.value);
    
    if (amount <= 0) {
      alert('Сумма должна быть больше 0');
      return;
    }
    
    var newOperation = {
      id: Date.now(),
      type: type,
      category: category,
      amount: amount,
      date: new Date().toLocaleString('ru-RU')
    };
    
    props.onAddOperation(newOperation);
    form.reset();
  }
  
  // Фильтруем категории по типу
  var filteredCategories = [];
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].type === props.operationType) {
      filteredCategories.push(categories[i]);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>Добавить операцию</h2>
      
      <div className="form-group">
        <label>Тип:</label>
        <select name="type" onChange={props.onTypeChange} value={props.operationType}>
          <option value="income">Доход</option>
          <option value="expense">Расход</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Категория:</label>
        <select name="category">
          {filteredCategories.map(function(cat) {
            return <option key={cat.id} value={cat.name}>{cat.name}</option>;
          })}
        </select>
      </div>
      
      <div className="form-group">
        <label>Сумма:</label>
        <input type="number" name="amount" step="0.01" min="0" required />
      </div>
      
      <button type="submit" className="btn-add">Добавить</button>
    </form>
  );
}

export default AddOperationForm;