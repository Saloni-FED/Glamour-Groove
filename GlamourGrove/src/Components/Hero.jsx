import IMAGES from "../../Utils/Constant/slider";
import Button from "./Button";
import { useState } from "react";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center  gap-10  absolute top-0 max-md:top-52 z-[-1] xl:padding-l max-sm:pl-0"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28  ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Latest Collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10">
            Glamor Groove
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">New</span> Trend
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish and latest outfit in our collections
        </p>
        <Button />
      </div>
      <div className="flex  border-2 flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary  bg-cover">
        <img
          src={IMAGES[currentImageIndex]}
          alt="shoes1"
          width="200"
          height="200"
          className="relative rounded-full transition-all duration-300 hover:scale-150"
        />
        <div className="absolute -bottom-[8%]">
          <div className="flex gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6 ">
            {IMAGES.map((cloth,i) => (
              <div
              key={cloth}
                className={`border-2  flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ${cloth === IMAGES[currentImageIndex] ? "border-coral-red" : "border-transparent"}`}
              >
                <img
                  src={cloth}
                  alt="collection"
                  width="100"
                  height="100"
                  className="object-contain rounded-full cursor-pointer"
                  onClick={()=>{
                    setCurrentImageIndex(i)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
