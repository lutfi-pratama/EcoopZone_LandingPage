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
      <a className="w-full text-black bg-gray-200 md:bg-transparent md:w-auto">
        <li
          className={`px-6 py-3 font-medium border-b-2 border-teal-400 border-opacity-0 hover:border-opacity-100 hover:bg-white md:hover:border-opacity-0 md:hover:bg-transparent md:ml-2 md:opacity-60 hover:opacity-100 lg:ml-6 lg:hover:scale-110 ${
            router.pathname == props.url
              ? "md:opacity-100 md:scale-110 drop-shadow-[1.3px_0_0_white]"
              : ""
          } ${
            props.scrollValue
              ? "drop-shadow-[1.3px_0_0_black] md:drop-shadow-none md:text-white md:hover:drop-shadow-[1.3px_0_0_white]"
              : "md:hover:drop-shadow-[1.3px_0_0_black] drop-shadow-[1.3px_0_0_black]"
          }`}
        >{`${props.name}`}</li>
      </a>
    </Link>
  );
};

export { NavLinks };
