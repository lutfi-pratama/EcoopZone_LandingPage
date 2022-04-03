import { useRouter } from "next/router";

const ProductOverview = () => {
  const router = useRouter();

  return (
    <div className="relative top-[25rem]">
      <div className="top-4 w-full text-center">
        <header className="font-bold text-[#203C57] md:text-2xl">
          Product Overview
        </header>
        <img
          src={`${router.basePath}assets/images/line-ProductOverview.svg`}
          alt="ProductOverview-line"
          className={"mt-1 ml-[30vw] animate-slide_line_2 md:w-[9rem]"}
        />
      </div>
      <img
        src={`${router.basePath}assets/images/product-overview.svg`}
        alt="product-overview-illustration"
        className={"absolute top-8"}
      />
    </div>
  );
};

export { ProductOverview };
