import Title from '../Title/Title';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Comment.scss';
import CommentItem from './CommentItem/CommentItem';
import Data from './CommentData.json';
export default function Comment (){
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
            <Title title="Our Traveler Says" subTitle="What Our Clients Saying" background="#fff"/>
            <div className="comment-slide">
                <Slider {...settings}>
                    {
                        Data.map(data => {
                           return (<CommentItem 
                                img = {data.img} 
                                name={data.name} 
                                title = {data.title} 
                                rating = {data.rating}
                                comment = {data.comment}
                                />)
                        })
                    }
                </Slider>
            </div>
        </>
    )
}