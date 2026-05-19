import React from 'react';
import type { HeaderProps } from '../types';
import styles from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;