import { useRouter } from "next/router";
// import { useState } from "react";

const Ekosistem = () => {
  const router = useRouter();
  // const [deviceHoverOn, setDeviceHoverOn] = useState(false);

  // const imgMouseEnterHandler = (e: any) => {
  //   console.log("cek Enter ==> ", e.target);
  //   setDeviceHoverOn(true);
  // };
  // const imgMouseLeaveHandler = (e: any) => {
  //   // const img: HTMLImageElement = event.currentTarget;
  //   // img.style.top = "0px";
  //   console.log("cek Leave ==> ", e.target);
  //   setDeviceHoverOn(false);
  // };

  return (
    <div className="relative mt-4 w-full text-black">
      {/* Header */}
      <div className="absolute right-0 top-4 mr-8 w-2/5">
        <header className="text-right font-bold md:pr-8 md:text-2xl">
          Ekosistem
        </header>
        <img
          src={`${router.basePath}assets/images/line-ekosistem.svg`}
          alt="ekosistem-line"
          className={"float-right mt-1 w-10 animate-slide_line md:w-16"}
        />
      </div>

      {/* Illustration */}
      <div className="">
        {/* <img
          src={`${router.basePath}assets/images/Object-3.png`}
          alt="Hover1"
          // onMouseOver={() => setDeviceHoverOn(true)}
          // onMouseLeave={() => setDeviceHoverOn(false)}
          onMouseEnter={imgMouseEnterHandler}
          onMouseLeave={imgMouseLeaveHandler}
          // onMouseOut={imgMouseOutHandler}
          // className={`absolute left-[1px] z-[1] w-[88%] ${deviceHoverOn? "top-40" : "top-0"}`}
          className={`absolute left-[1px] bg-opacity-0 top-40 z-10 w-[88%]`}
        /> */}
        <img
          src={`${router.basePath}assets/images/ekosistem-img.svg`}
          alt="Ekosistem-Illustration"
          className="absolute top-0 w-11/12"
        />
        <div className="mx-auto flex w-8/12 items-center pt-[60vw] text-center text-[8px] font-light md:w-2/3 md:pt-[57vw] md:text-[10px] md:font-medium">
          <span>~</span>
          <p className="tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            egestas eu, commodo nascetur. In nam nunc tortor.
          </p>
          <span>~</span>
        </div>
      </div>
    </div>
  );
};

export { Ekosistem };
