// Definição da Task (tarefa)
export interface Task {
    id: number;
    text: string;
    completed: boolean;
    createdAt: Date;
}

// Definição do Status (para filtros futuros)
export type Status = 'all' | 'active' | 'completed';

// Definição do Stats (estatísticas)
export interface Stats {
    total: number;
    completed: number;
    pending: number;
    percentage: number;
}

// Definição das Props dos componentes
export interface HeaderProps {
    title: string;
}

export interface TodoFormProps {
    onAddTodo: (text: string) => void;
}

export interface TodoItemProps {
    todo: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export interface TodoListProps {
    todos: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export interface StatsProps {
    todos: Task[];
}