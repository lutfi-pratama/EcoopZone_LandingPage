import { NavLinks } from "../components/NavLinks";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import { Background } from '../background/Background';
// import { Button } from '../button/Button';
// import { HeroOneButton } from '../hero/HeroOneButton';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from "./Logo";

const Header = () => {
  const router = useRouter();
  const [navListOpen, setNavListOpen] = useState(false);
  const [changeLang, setChangeLang] = useState(false);
  const [scrollY, setScrollY] = useState(true);
  const [highestScrollY, setHighestScrollY] = useState(true);

  useEffect(() => {
    let lastScrollTop: any;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) setHighestScrollY(true);

      if (scrollTop > lastScrollTop) {
        setScrollY(false);
        setHighestScrollY(false);
        lastScrollTop = scrollTop;
      } else {
        setScrollY(true);
        lastScrollTop = scrollTop;
      }
    });
  }, []);

  return (
    <nav
      className={`fixed z-50 mx-auto flex w-full items-center justify-between px-4 py-2 opacity-100 drop-shadow-md transition-all delay-100 duration-200 ease-in md:px-6 md:pr-[7rem] lg:px-12 lg:pr-32 ${
        scrollY ? "top-0" : "top-[-5rem]"
      } ${highestScrollY ? " bg-transparent drop-shadow-none" : "bg-white"} `}
    >
      <Logo highestScroll={highestScrollY} />

      {/* Hamburger Button Nav for mobile */}
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        onClick={() => setNavListOpen(!navListOpen)}
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-800 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <svg
          className={`${navListOpen ? "hidden" : ""} ${
            highestScrollY ? "text-white" : "text-gray-700"
          } h-7 w-7`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          className={`${navListOpen ? "" : "hidden"} h-7 w-7`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            className={` ${highestScrollY ? "text-white" : "text-gray-700"}`}
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      {/* Button-change-language ---> NEED OPTIMIZE*/}
      <span
        onClick={() => setChangeLang(!changeLang)}
        className="absolute right-[4.5rem] flex cursor-pointer items-center drop-shadow-md md:right-[2.5rem]"
      >
        <img
          src={`${router.basePath}assets/images/flag-for-indonesia.svg`}
          alt="Indonesia"
          className={"h-6"}
        />
        <svg
          width="20"
          className="opacity-70"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5 12L16.455 21L10.5 12H22.5Z"
            fill={`${highestScrollY ? "#ffffff" : "#000000"}`}
          />
        </svg>
      </span>
      {/* After click the component */}
      <div
        className={`${
          changeLang && scrollY ? "opacity-100" : "opacity-0"
        } absolute top-[3.2rem] right-[3.5rem] w-20 rounded-lg bg-gray-200 px-4 py-6 transition-all ease-out md:right-[1.8rem] lg:right-[2rem]`}
      >
        <div className="flex cursor-pointer items-center justify-center after:absolute after:top-12 after:text-[8px] after:text-red-600 after:hover:content-['Coming-soon']">
          <img
            src={`${router.basePath}assets/images/flag-for-united-kingdom.svg`}
            alt="English"
            className={"mr-2 h-6"}
            title="Belum tersedia"
          />
          <p className="font-medium">EN</p>
        </div>
      </div>

      {/* List of Nav ---> NEED OPTIMIZE */}
      <ul
        className={`fixed left-0 z-[-100] w-full ${
          navListOpen && scrollY ? "top-[4rem]" : "top-[4rem] left-[-50rem]"
        } md:text-md flex flex-col items-center drop-shadow-xl transition-all duration-200 ease-in-out md:static md:w-auto md:flex-row md:shadow-none`}
      >
        <NavLinks scrollValue={highestScrollY} url="/" name="Home" />
        <NavLinks scrollValue={highestScrollY} url="/profile" name="Profile" />
        <NavLinks scrollValue={highestScrollY} url="/contact" name="Contact" />
      </ul>
    </nav>
  );
};

export { Header };
