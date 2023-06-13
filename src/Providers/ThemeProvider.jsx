import React, { useState } from 'react';


export const ThemeContext = React.createContext();


const ThemeProvider = ({children}) => {
        const [isDarkMode, setIsDarkMode] = useState(false);
        const theme = isDarkMode ? 'dark' : 'light';
        // changing theme
        const toggleTheme = () => {
          setIsDarkMode((prevMode) => !prevMode);
          localStorage.setItem("CAtheme", theme);
        };
      


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;