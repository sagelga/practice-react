import React, { createContext, useState } from 'react'

const translations = {
    en: require('../language/en.json'),
    th: require('../language/th.json')
}

export const LanguageContext = createContext()

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState('en')

    const changeLanguage = (language) => {
        setLanguage(language);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
            {props.children}
        </LanguageContext.Provider>
    )
}
