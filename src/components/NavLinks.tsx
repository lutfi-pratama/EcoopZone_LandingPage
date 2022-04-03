import Link from "next/link";
import { useRouter } from "next/router";

type ILinkProps = {
  scrollValue?: boolean;
  url?: string;
  name?: string;
};

const NavLinks = (props: ILinkProps) => {
  const router = useRouter();
  return (
    <Link href={`${props.url}`}>
      <a className="w-full bg-gray-200 text-black md:w-auto md:bg-transparent">
        <li
          className={`border-b-2 border-teal-400 border-opacity-0 px-6 py-3 font-medium hover:border-opacity-100 hover:bg-white hover:opacity-100 md:ml-2 md:opacity-60 md:hover:border-opacity-0 md:hover:bg-transparent lg:ml-6 lg:hover:scale-110 ${
            router.pathname == props.url
              ? "drop-shadow-[1.3px_0_0_white] md:scale-110 md:opacity-100"
              : ""
          } ${
            props.scrollValue
              ? "drop-shadow-[1.3px_0_0_black] md:text-white md:drop-shadow-none md:hover:drop-shadow-[1.3px_0_0_white]"
              : "drop-shadow-[1.3px_0_0_black] md:hover:drop-shadow-[1.3px_0_0_black]"
          }`}
        >{`${props.name}`}</li>
      </a>
    </Link>
  );
};

export { NavLinks };
