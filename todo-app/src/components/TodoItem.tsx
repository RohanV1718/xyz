import React from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
        />
        <span>{todo.text}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
