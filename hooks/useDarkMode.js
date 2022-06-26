import { useState, useEffect } from "react";

// Directly add the localstorage into useDarkMode component.
// Ref. source: https://javascript.plainenglish.io/how-to-create-light-and-dark-mode-toggle-in-next-js-with-tailwind-61e67518fd2d

// const useLocalStorage = (key, initialValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//         try {
//             const item = localStorage.getItem(key);
//             return item ? JSON.parse(item) : initialValue;
//         } catch (error) {
//             console.log(error);
//             return initialValue;
//         }
//     })

//     const setValue = (value) => {
//         try {
//             const valueToStore = value instanceof Function ? value(storedValue) : value;
//             setStoredValue(valueToStore);
//             localStorage.setItem(key, JSON.stringify(valueToStore));
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return [storedValue, setValue];
// };

export const useDarkMode = () => {
    const [enabled, setEnabled] = useState(
        typeof window !== "undefined" ? localStorage.getItem('data-theme') !== 'light' : true 
    );

    // const isEnabled = typeof enabledState === 'undefined' && enabled;

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        enabled ? bodyClass.add(className) : bodyClass.remove(className);
        if (typeof window !== "undefined") {
            localStorage.setItem('data-theme', enabled? 'dark':'light')
        }
    }, [enabled]);

    return [enabled, setEnabled]
}

export default useDarkMode;