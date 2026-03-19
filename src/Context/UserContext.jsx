/* eslint-disable react-refresh/only-export-components */
import {createContext, useState} from "react"

export const UserContext = createContext();

export default function UserProvider({children}) {

  const [user, setUser] = useState(null);

  const setDataUser = (data) => {
    setUser(data);
  };
  
  return (
    <UserContext.Provider value={{user,setDataUser}}>
      {children}
    </UserContext.Provider>
  );
}
