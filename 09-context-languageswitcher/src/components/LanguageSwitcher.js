import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageSwitcher = () => {

    const { language, changeLanguage } = useContext(LanguageContext)

    const onLanguageChangeHandler = event => {
        changeLanguage(event.target.value)
    }

    return (
        <div>
            <select onChange={onLanguageChangeHandler} value={language}>
                <option value='en'>English</option>
                <option value='th'>Thai</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher
