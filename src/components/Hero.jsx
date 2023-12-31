import React from "react";
import Carousal from "./Carousal";

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="max-w-7xl  flex md:flex-row flex-col gap-[10px] md:gap-[100px] justify-center items-center mx-[20px] md:mx-auto md:my-[100px] my-[50px] "
      >
        <div className="flex flex-col justify-center ">
          <h1 className="md:text-[55px]  text-[40px] text-start font-rufina ">
            JAT MACHINERY STORES
          </h1>
          <h1 className="md:text-[70px] text-[40px] font-bold text-start font-rufina    ">
          जाट मशीनरी स्टोर
          </h1>
          <p >Your one-stop shop of Hardware Machinery
          </p>
          <p className="">Timings: 10:00AM to 8:00PM <br/>समय: प्रातः 10:00 बजे से रात्रि 8:00 बजे तक
  </p>
          <a
            href="#footer"
            className="flex justify-center my-6 border border-black items-center p-2 w-[150px]"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Carousal />
        </div>
      </div>
    </>
  );
}

export default Hero;

// sldjkc ls cls cmalc alc alcla clkaodlsd asdnoan alm skandpna al kl
