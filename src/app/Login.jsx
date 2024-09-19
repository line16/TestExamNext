import { useContext } from 'react'
import { LoginContext } from './Context/LoginContext'
import { Navigate } from 'react-router-dom'

const Login = () => {

    // hent signIn-metoden fra context-filen
    // hent også user - så hvis login lykkes => send til admin
    const { signIn, user } = useContext( LoginContext )

    // hvis der er en user (= login lykkes) -> send til admin
    if ( user ) return <Navigate to="/admin" replace />



    const handleLogin = ( e ) => {

        e.preventDefault() // undgå reload ved submit

        let identity = e.target.inpIdentity.value   // snup input fra input-feltet med name="inpIdentity"
        let password = e.target.inpPW.value         // snup input fra input-feltet med name="inpPW"

        signIn( identity, password ) // send brugernavn/email og password til signin-metoden i context

    }


    return (
        <section>
            <h1 className="text-3xl">Login</h1>

            <form onSubmit={ handleLogin }>

                <div className="m-4">
                    <input type="text" name="inpIdentity" placeholder='Brugernavn eller email (identity)' defaultValue="line@videnDjurs.dk" className="w-1/2 border border-white input" />
                </div>


                <div className="m-4">

                    <input type="password" name="inpPW" placeholder='Password' defaultValue="Abc12345!" className="w-1/2 border border-white input" />

                </div>

                <div className="m-4">
                    <button type="submit" className="btn btn-success">LOGIN</button>
                </div>


            </form>



        </section>
    )
}

export default Login