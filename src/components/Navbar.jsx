import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Logo } from '../components/Logo'
import { Login  } from "../pages/login/Login"

export const Navbar = () => {


    const [loginState, setLoginState] = useState(false);

    const navigate = useNavigate();

    const handleClickLogin = () => {
        setLoginState(!loginState)
    }

    const handleClickAlreadyLogin = () => {
        navigate(`/perfil/${state?.username}`, {
            replace: true,
        })
    }

    const { state } = useLocation();

    return(
        <>
            { loginState ? <div className="backgroundLogin" onClick={handleClickLogin}></div> : null}
            { loginState ? <Login showLogin={loginState}/> : null }
            <header className="container__navbar">
                <Logo />
                <div className="container__links animate__animated animate__fadeInRight">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/lobbys">Lobbys</NavLink>
                    <NavLink to="/comunidad">Comunidad</NavLink>
                    {
                        state?.logged ?(
                            <div className="container__profile" onClick={handleClickAlreadyLogin}>
                                <div className="profileLogged">
                                    <div className="cotainer__profile-name">
                                        <p>{state?.username}</p>
                                    </div>
                                    <div className="profile">
                                        <img src="../src/assets/calven.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            )
                            : 
                            (
                            <div className="container__profile" onClick={handleClickLogin}>
                                <div className="profileNotLogged">
                                    <svg  viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 0.5C12.3924 0.5 13.7277 1.05312 14.7123 2.03769C15.6969 3.02226 16.25 4.35761 16.25 5.75C16.25 7.14239 15.6969 8.47775 14.7123 9.46231C13.7277 10.4469 12.3924 11 11 11C9.60761 11 8.27225 10.4469 7.28769 9.46231C6.30312 8.47775 5.75 7.14239 5.75 5.75C5.75 4.35761 6.30312 3.02226 7.28769 2.03769C8.27225 1.05312 9.60761 0.5 11 0.5ZM11 13.625C16.8013 13.625 21.5 15.9744 21.5 18.875V21.5H0.5V18.875C0.5 15.9744 5.19875 13.625 11 13.625Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                            )
                    }
                </div>
            </header>

        </>
    )
}