import { useRouter } from "next/router";

const Opening = () => {
  const router = useRouter();

  return (
    <div className="relative h-[34.5rem] w-full md:h-screen">
      {/* bg-mobile */}
      <img
        src={`${router.basePath}assets/images/bg-intro-mobile.svg`}
        alt="bg-mobile"
        className="absolute w-full md:hidden"
      />
      {/* bg-desktop */}
      <img
        src={`${router.basePath}assets/images/bg-intro.svg`}
        alt="bg"
        className="absolute top-0 right-0 hidden md:block md:w-[75%] lg:w-[75%] xl:top-[-2rem] xl:w-[80%] 2xl:top-[-4rem]"
      />

      {/* Content */}
      <section className="absolute top-[90vw] left-[6%] w-4/5 text-center text-[#203C57] md:top-[17rem] md:left-7 md:w-3/5 md:text-left lg:top-[30vw] lg:left-[4rem] xl:top-[33vw]">
        <img
          src={`${router.basePath}assets/images/line-opening.svg`}
          alt="opening-line"
          className={
            "hidden scale-75 animate-bounce-opening md:block md:scale-90 lg:scale-100"
          }
        />
        <header className="mt-2 ml-4 w-full text-xl font-bold md:w-3/4 md:text-3xl md:leading-10 lg:w-[40vw] lg:text-3xl xl:text-4xl">
          Ecoopzone solusi bisnis koperasi
        </header>
        <article className="mt-4 ml-5 w-full text-sm font-light md:w-4/5 xl:mt-6 xl:w-3/5 xl:text-base">
          Apapun bisnis Anda, Ecoopzone adalah solusi untuk mempercepat
          pertumbuhan bisnis jangka panjang!
        </article>
      </section>
    </div>
  );
};

export { Opening };
