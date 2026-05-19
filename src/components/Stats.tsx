import React from 'react';
import type { StatsProps } from '../types';
import styles from './Stats.module.css';

const Stats: React.FC<StatsProps> = ({ todos }) => {
    const total: number = todos.length;
    const completed: number = todos.filter(todo => todo.completed).length;
    const pending: number = total - completed;
    const percentage: number = total === 0 ? 0 : (completed / total) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.statsCard}>
                <h3 className={styles.title}>📊 Estatísticas</h3>

                <div className={styles.statsGrid}>
                    <div className={styles.stat}>
                        <span className={styles.statLabel}>Total:</span>
                        <span className={styles.statValue}>{total}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statLabel}>Concluídas:</span>
                        <span className={styles.statValueCompleted}>{completed}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statLabel}>Pendentes:</span>
                        <span className={styles.statValuePending}>{pending}</span>
                    </div>
                </div>

                {total > 0 && (
                    <div className={styles.progressContainer}>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <span className={styles.progressText}>
                            {Math.round(percentage)}% concluído
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Stats;