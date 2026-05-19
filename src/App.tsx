import { useState } from 'react';
import type { Task } from './types';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Stats from './components/Stats';
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string): void => {
    const newTodo: Task = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header title="Lista de Tarefas com TypeScript" />
        <div className={styles.containerBody}>
          <TodoForm onAddTodo={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          <Stats todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;