import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselProduct(props) {
  const detail = props.data;

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="customArrow">
      <Slider {...settings}>
        {detail.productImages
          ? detail.productImages.map((data) => (
              <img
                src={
                  data ? data.imageUrl : "../../assets/gif/Spinner-1s-200px.gif"
                }
                alt=""
                className="h-80 w-full object-cover md:h-[400px] md:rounded-2xl"
              />
            ))
          : null}
      </Slider>
    </div>
  );
}
