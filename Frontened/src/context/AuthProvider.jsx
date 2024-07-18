import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const intialAuthUser = localStorage.getItem("Users") // -> call local storage data name Uers

  const [authUser, setauthUser] = useState(  //->
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
  ) //--> when data inside intialAuthUser then we covert this string value to javascript object
  // --> and store in authuser otherwise not
  // --> JSON.parse(string to js object) and JSON.strinfy(object to string)
  return(
    <AuthContext.Provider value={[authUser, setauthUser]}> 
      {children}
    </AuthContext.Provider> //--> Called AuthContext tp pass any prompt to all the choldern components

  )
}
export const useAuth = () => useContext(AuthContext); //--> ho hmm n create context kiys tha 
// --> ab usse usecontext k sath use karege by the name of useAuth
// --< mean authuser and setauthuser ki value beji h sidha kocal storage s nikal k 
// --> main.jsx m ja ker iss ko puri body k sath wrap ker dege jiss sare component use ker sake
// --> Check the login and logout component how can we use this useAuth function for this process


