import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#7AAEC5] text-lg uppercase font-bold">smk bhumi husada</p>
        <h1 className="text-4xl font-bold uppercase pt-3">we are rpl</h1>
        <div>
          <h3 className="text-lg pt-3 capitalize text-slate-600">mempelajari seperti</h3>
          <Typed strings={["hal0", "guys", "apa.", "kabs", "bro"]} typeSpeed={40} backSpeed={140} loop />
        </div>
      </div>
    </div>
  );
};

export default Hero;
