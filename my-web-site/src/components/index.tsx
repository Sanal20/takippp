import React from 'react';

export const Header: React.FC = () => {
    return (
        <header>
            <h1>My Web Site</h1>
        </header>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} My Web Site. All rights reserved.</p>
        </footer>
    );
};