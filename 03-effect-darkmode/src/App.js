import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(getDefaultTheme());

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    function getDefaultTheme() {
        const selectedTheme = JSON.parse(localStorage.getItem('dark'));
        return selectedTheme || false;
    };

    return (
        <div className='App'>
            <div className={darkMode ? 'dark-mode' : ''}>
                <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <button className={`button ${darkMode ? 'dark-mode' : ''}`}
                        onClick={() => setDarkMode(darkMode => !darkMode)}>Toggle
                </button>
            </div>
        </div>
    );
}

export default App;
