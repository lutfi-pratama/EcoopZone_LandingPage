import { useRouter } from "next/router";

const CardFeatures = () => {
  const router = useRouter();

  return (
    <div className="relative mt-10 w-full text-center md:mt-24">
      {/* Background */}
      <header className="pt-6 text-lg font-semibold text-white">
        Semua Untuk Satu Teknologi Koperasi
      </header>
      <img
        src={`${router.basePath}assets/images/bg-features.png`}
        alt="background-features"
        className={"absolute top-0 -z-10 object-cover"}
      />
    </div>
  );
};

export { CardFeatures };
