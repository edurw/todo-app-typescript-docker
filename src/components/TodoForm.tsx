import React, { useState } from 'react';
import type { TodoFormProps } from '../types';
import styles from './TodoForm.module.css';

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite uma nova tarefa..."
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                Adicionar
            </button>
        </form>
    );
};

export default TodoForm;