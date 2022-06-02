import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-10px] w-full h-[30rem] mx-auto text-center flex flex-col justify-center">
        <p className="text-[#7AAEC5] text-lg uppercase font-bold md:text-3xl">smk bhumi husada</p>
        <h1 className="text-2xl font-bold uppercase pt-3 md:text-4xl">we are software engineer</h1>
        <div>
          <h3 className="text-1xl pt-3 capitalize text-slate-600 md:text-2xl">"little things means a lot"</h3>
        </div>
      </div>
      <div className="mt-[70px] md:-mt-[60px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7AAEC5" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,154.7C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default Hero;
