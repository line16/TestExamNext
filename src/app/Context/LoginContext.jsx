import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext()

//hook til request server
import useRequestData from '../../../Hooks/useRequestData'

// HUSK!!!!: Context provider skal tilføjes til main.jsx el.lign.
const LoginContextProvider = ( props ) => {

    const [ user, setUser ] = useState()

    //åbn hook
    const {makeRequest, isLoading, data, error} = useRequestData()

    //tjekker om signup virker
    useEffect(() => {
      if (data && data.name) {
        setUser(data.name)
      }
        else{
            setUser() //tøm user for en sikkerheds skyld - fejl i login
        }
    }, [data])
    

    // Simuleret login - men kan nemt kobles på en rigtig signIn-metode med kald til et api, hvor identity og password sendes med
    const signIn = ( identity, password ) => {

        const fd = new FormData()
        fd.append("email", identity)
        fd.append("password", password)

        makeRequest("http://127.0.0.1:5125/users/login", "POST", null, fd)

        // simuleret login
        // identity kan være email eller password
        // if ( identity === "admin" && password === "abc123" ) {
        //     setUser( identity )
        // } else {
        //     setUser()
        // }
    }

    const signOut = () => {
        //slet cookie på server
        makeRequest("http://127.0.0.1:5125/users/logout", "GET")

        setUser() // tøm state = ikke logget ind
    }


    return (
        <LoginContext.Provider value={ { signIn, signOut, user } }>
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider