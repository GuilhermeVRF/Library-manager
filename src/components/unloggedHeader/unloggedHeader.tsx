import React from 'react';
import style from './unloggedHeader.module.css';

function Header() {

    return (
        <header className={style.header}>
            <h1>Library Manager</h1>
        </header>
    );
};

export default Header;