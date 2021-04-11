import Title from "../Title/Title";
import "./Stay.scss";
import Data from './Stay.json';
import StayItem from "./StayItem/StayItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Stay() {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        }
      }
    ]
  };
  return (
    <>
      <Title
        subTitle="Popular Travel Packages"
        title="Top Cities for Travel"
        background="#F7F9FC"
      ></Title>
      <div className="stay-items">
        <Slider {...settings}>
          {Data.map((data) => {
            return (
              <StayItem
                img={data.img}
                title={data.title}
                discount={data.discount}
                price={data.price}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
