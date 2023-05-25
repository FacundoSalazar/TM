import { useEffect, useState } from "react"

export const HomeImg = ({ imageGame }) => {

    const [heigth, setHeigth] = useState('auto');

    useEffect( () =>{
        if (imageGame === "../src/assets/GoldKaisa.png") {
            setHeigth('100%');
        } else{
            setHeigth('auto');
        }
    }, [imageGame])

    return(

        <div className="home__img animate__animated animate__fadeInRight">
            <img src={imageGame} alt="" style={ { height: `${heigth}`, transition: "0.5s ease-in"} }/>
        </div>


    )
}