import { NavLink } from "react-router-dom"
import { Button } from "../../components/Button"
import { SocialMedias } from "../../components/SocialMedias"

export const HomeLeft = () => {
    return(

        <div className="home__left animate__animated animate__fadeInLeft">
            <div className="headtitle">ENCUENTRA TU</div>
            <div className="title">TEAM</div>
            <div className="container__button">
                <div className="">
                    <p>¡Crea un lobby para encontrar <br />
                    al jugador que le falta a tu <b>TEAM</b>!</p>
                    <NavLink to="/lobbys/crear">
                        <Button text="CREAR UN LOBBY"/>
                    </NavLink>
                </div>
                <div className="">
                    <p>Jugar con amigos es mas divertido. <br />
                    ¡Encuentra un <b>TEAM</b> al cual unirte!</p>
                    <NavLink to="/lobbys">
                        <Button text="ENTRAR UN LOBBY"/>
                    </NavLink>
                </div>
            </div>

            <SocialMedias />

            <p>Copyright © 2023 - Teammates Company. All rights reserved | 
                <span> support@teammates.com</span>
            </p>
        </div>
    )
}