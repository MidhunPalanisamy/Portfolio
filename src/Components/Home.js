import React, { useEffect, useRef, useState } from "react";
import "./CSS/home.css";
import man from "../Assets/man.png";
import splash from "../Assets/bg-splash.png";
import dragon from "../Assets/dragon.png";
import NvgButton from "./NvgButton";
import bGit from "../Assets/bGithub.png";
import wGit from "../Assets/wGithub.png";
import bLdn from "../Assets/bLdn.png";
import wLdn from "../Assets/wLdn.png";
import Navbar from "./Navbar";

const Home = () => {
  const homeRef = useRef(null);
  const [dragonMove, setDragonMove] = useState(false);
  const Git = "https://github.com/MidhunPalanisamy";
  const Ldn = "https://www.linkedin.com/in/midhun-palanisamy666";

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === "dragon-float") {
        setDragonMove(true);
      }
    };
    const homeDiv = homeRef.current;
    homeDiv.addEventListener("animationend", handleAnimationEnd);
    return () => {
      homeDiv.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const bgStyle = {
    backgroundColor: "#e8e6e7",
    backgroundImage: `url(${dragon})`,
    backgroundSize: "400px 950px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center -690px",
    animation: dragonMove
      ? "dragon-movement 3s ease-in-out infinite alternate"
      : "dragon-float 3s ease-in forwards",
    animationFillMode: "forwards",
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div
      ref={homeRef}
      className={`home${dragonMove ? " dragon-move" : ""}`}
      style={bgStyle}
    >
      <Navbar />
      <img className="img-man" src={man} alt="Man" />
      <img className="img-spl" src={splash} alt="spl" />
      <p className="nm">MIDHUN PALANISAMY</p>
      <NvgButton className="git" bImg={bGit} wImg={wGit} Link={Git} />
      <NvgButton className="Ldn" bImg={bLdn} wImg={wLdn} Link={Ldn} />
    </div>
  );
};

export default Home;