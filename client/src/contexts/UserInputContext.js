import { createContext, useState } from 'react'

const UserInputContext = createContext({
    userInput: { email: '', password: '', profileImage: '' },
    setUserInput: () => {},
  });

export const UserInputProvider = ({ children }) => {
    const [userInput, setUserInput] = useState({ email: '', password: '', profileImage: '' });

    return (
        <UserInputContext.Provider value={{ userInput, setUserInput }}>
            {children}
        </UserInputContext.Provider>
        );
    };
  
export default UserInputContext;