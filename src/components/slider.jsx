import Slider from "react-slick";
import photo from "../assets/meetups_foto.png";
import construccion from '../assets/construccion.png';

function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div><img src={photo.src} /></div>
        <div><img src={construccion.src} /></div>
        <div><img src={photo.src} /></div>
        <div><img src={construccion.src} /></div>
      </Slider>
    </div>
  );
}

export default LazyLoad;
