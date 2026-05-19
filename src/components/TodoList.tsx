import React from 'react';
import type { TodoListProps } from '../types';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    if (todos.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>✨ Nenhuma tarefa cadastrada</p>
                <p className={styles.emptySubtext}>Adicione sua primeira tarefa acima!</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;