import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "275px",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerPadding: 0,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="md:my-10">
          <div className="relative mx-0 flex bg-gradient-to-b from-orange-200 to-orange-200/0 px-4 pt-32 pb-40 md:mx-20 md:rounded-3xl md:bg-orange-200 md:py-12 md:px-20">
            <div className="h-40 md:w-2/5">
              <div className="pb-2 text-xl font-bold md:text-4xl">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="text-lg font-medium text-red-500 md:text-3xl">
                60%
              </div>
            </div>
            <div className="flex w-1/2 items-start md:w-1/6 md:items-center">
              <img src="./assets/images/gift_ramadhan.png" alt="" />
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 md:block">
              <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="h-full w-full rounded-r-3xl object-cover"
              />
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-r from-orange-200 to-orange-200/0 md:block" />
          </div>
        </div>
        <div className="md:my-10">
          <div className="relative mx-0 flex bg-gradient-to-b from-purple-200 to-purple-200/0 px-4 py-12 md:mx-20 md:rounded-3xl md:bg-purple-200 md:px-20">
            <div className="h-40 md:w-2/5">
              {/* <div className="pb-2 text-xl font-bold md:text-4xl">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="text-lg font-medium text-red-500 md:text-3xl">
                60%
              </div> */}
            </div>
            <div className="flex w-1/2 items-start md:w-1/6 md:items-center">
              {/* <img src="./assets/images/gift_ramadhan.png" alt="" /> */}
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 md:block">
              {/* <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="h-full w-full rounded-r-3xl object-cover"
              /> */}
              <div className="bg-gray-200" />
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-r from-purple-200 to-purple-200/0 md:block" />
          </div>
        </div>
        <div className="md:my-10">
          <div className="relative mx-0 flex bg-gradient-to-b from-green-200 to-green-200/0 px-4 py-12 md:mx-20 md:rounded-3xl md:bg-green-200 md:px-20">
            <div className="h-40 md:w-2/5">
              {/* <div className="pb-2 text-xl font-bold md:text-4xl">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="text-lg font-medium text-red-500 md:text-3xl">
                60%
              </div> */}
            </div>
            <div className="flex w-1/2 items-start md:w-1/6 md:items-center">
              {/* <img src="./assets/images/gift_ramadhan.png" alt="" /> */}
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 md:block">
              {/* <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="h-full w-full rounded-r-3xl object-cover"
              /> */}
            </div>
            <div className="absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-r from-green-200 to-green-200/0 md:block" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
