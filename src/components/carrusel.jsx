import Slider from "react-slick";
import photo from "../assets/meetups_foto.png";
import construccion from '../assets/construccion.png';

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
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

export default Fade;
