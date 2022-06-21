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
    // const [enabled, setEnabled] = useLocalStorage('dark-theme');
    const [enabled, setEnabled] = useState(
        typeof window !== "undefined" ? localStorage.getItem('dark-theme') : "dark"
    );

    const isEnabled = typeof enabledState === 'undefined' && enabled;

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
        if (typeof window !== "undefined") {
            localStorage.setItem('dark-theme', enabled)
        }
    }, [enabled, isEnabled]);

    return [enabled, setEnabled]
}

export default useDarkMode;