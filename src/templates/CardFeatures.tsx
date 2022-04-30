import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const CardFeatures = () => {
  const router = useRouter();

  return (
    <div className="relative mt-14 w-full text-center md:mt-24 xl:mt-32">
      {/* Background */}
      <header className="pt-6 pb-6 text-sm font-medium text-white md:pt-6 md:text-lg md:font-semibold lg:pb-8 lg:text-xl xl:text-2xl xl:pt-8 xl:pb-12">
        Semua Untuk Satu Teknologi Koperasi
      </header>
      <img
        src={`${router.basePath}assets/images/bg-features.png`}
        alt="background-features"
        className={"hidden md:flex absolute top-0 -z-10 w-full"}
      />
      <img
        src={`${router.basePath}assets/images/bg-features-mobile.png`}
        alt="background-features-mobile"
        className={"absolute md:hidden top-0 -z-10 w-full"}
      />

      {/* Card Slider */}
      <Swiper
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 45,
          }
        }}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper h-[64vw] bg-transparent px-10 md:h-[32vw] lg:h-[33vw] lg:px-14"
      >
        <SwiperSlide className="rounded-2xl bg-white opacity-50 hover:opacity-100">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-white opacity-50">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-white opacity-50">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-white opacity-50">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-white opacity-50">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-white opacity-50">
          Slide 6
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { CardFeatures };
