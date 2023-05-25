import { useState } from "react";
import { HomeImg } from "./HomeImg";
import { HomeLeft } from "./HomeLeft";

export const Home = () => {
  const data = [
    {
      id: 0,
      image: "../src/assets/reina6.png",
      icon: "../src/assets/valorant.png",
    },
    {
      id: 1,
      image: "../src/assets/GoldKaisa3.png",
      icon: "../src/assets/lol.png",
    },
    {
      id: 2,
      image: "../src/assets/CS3.png",
      icon: "../src/assets/csgo.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      
      <div className="container__home">
        <HomeLeft />
        <HomeImg imageGame={data[currentIndex].image} />
        <div className="container__carousel">
          {data.map((item, index) => (
            <div
              key={index}
              className={`animate__animated animate__fadeInRight ${
                currentIndex === index ? "activeGame" : ""
              }`}
              onMouseOver={() => handleMouseOver(index)}
            >
              <img src={item.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};