import { useRouter } from "next/router";
type ILogoProps = {
  highestScroll?: boolean;
};

const Logo = ({ highestScroll }: ILogoProps) => {
  const router = useRouter();

  // const size = props.xl ? '1.75' : "9";
  // const fontStyle = props.xl
  //     ? 'font-semibold text-3xl'
  //     : 'font-semibold text-xl';

  return (
    <span>
      {/* For Mobile */}
      <img
        src={`${router.basePath}assets/images/logo_black_white.svg`}
        alt="ecoopzone_bw"
        className={`${highestScroll ? "" : "hidden"} h-12 md:hidden`}
      />

      <img
        src={`${router.basePath}assets/images/ecoopzone-full.svg`}
        alt="ecoopzone"
        className={`${highestScroll ? "hidden" : ""} h-12 md:hidden`}
      />

      {/* For Desktop */}
      <img
        src={`${router.basePath}assets/images/ecoopzone-full.svg`}
        alt="ecoopzone"
        className={"hidden h-12 md:block"}
      />
    </span>
  );
};

export { Logo };
