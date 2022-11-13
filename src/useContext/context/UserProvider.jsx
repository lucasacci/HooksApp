import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

  // const user = {
  //   id: 123, 
  //   name: 'Luciano Casacci'
  // }

  const [user, setUser] = useState();



  return (

        // <UserContext.Provider value={{hola: 'mundo', user}}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>

  )
}
