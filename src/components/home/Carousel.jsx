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
          <div className="relative flex bg-gradient-to-b from-orange-200 to-orange-200/0 md:bg-orange-200 md:rounded-3xl mx-0 md:mx-20 px-4 md:px-20 py-12">
            <div className="md:w-2/5 h-40">
              <div className="font-bold text-xl md:text-4xl pb-2">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="font-medium text-lg md:text-3xl text-red-500">
                60%
              </div>
            </div>
            <div className="w-1/2 md:w-1/6 flex items-start md:items-center">
              <img src="./assets/images/gift_ramadhan.png" alt="" />
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5">
              <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="rounded-r-3xl w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-orange-200 to-orange-200/0" />
          </div>
        </div>
        <div className="md:my-10">
          <div className="relative flex bg-gradient-to-b from-purple-200 to-purple-200/0 md:bg-purple-200 md:rounded-3xl mx-0 md:mx-20 px-4 md:px-20 py-12">
            <div className="md:w-2/5 h-40">
              {/* <div className="font-bold text-xl md:text-4xl pb-2">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="font-medium text-lg md:text-3xl text-red-500">
                60%
              </div> */}
            </div>
            <div className="w-1/2 md:w-1/6 flex items-start md:items-center">
              {/* <img src="./assets/images/gift_ramadhan.png" alt="" /> */}
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5">
              {/* <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="rounded-r-3xl w-full h-full object-cover"
              /> */}
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-purple-200 to-purple-200/0" />
          </div>
        </div>
        <div className="md:my-10">
          <div className="relative flex bg-gradient-to-b from-green-200 to-green-200/0 md:bg-green-200 md:rounded-3xl mx-0 md:mx-20 px-4 md:px-20 py-12">
            <div className="md:w-2/5 h-40">
              {/* <div className="font-bold text-xl md:text-4xl pb-2">
                Bulan Ramadhan Banyak diskon!
              </div>
              <div className="py-2 text-xs md:text-sm">Diskon Hingga</div>
              <div className="font-medium text-lg md:text-3xl text-red-500">
                60%
              </div> */}
            </div>
            <div className="w-1/2 md:w-1/6 flex items-start md:items-center">
              {/* <img src="./assets/images/gift_ramadhan.png" alt="" /> */}
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5">
              {/* <img
                src="./assets/images/banner_ramadhan.jpg"
                alt=""
                className="rounded-r-3xl w-full h-full object-cover"
              /> */}
            </div>
            <div className="hidden md:block absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-green-200 to-green-200/0" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
