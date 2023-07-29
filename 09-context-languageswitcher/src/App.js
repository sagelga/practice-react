import './App.css';
import { LanguageContext } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import { useContext } from 'react';

function App() {
    const { language, translations } = useContext(LanguageContext)

    return (
        <div className="App">
            <h1>{translations[language]['website-name']}</h1>
            <p>{translations[language]['website-description']}</p>
            <LanguageSwitcher />
        </div>
    );
}

export default App;
