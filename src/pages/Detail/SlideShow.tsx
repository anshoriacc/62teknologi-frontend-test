import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideShow({ photos }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'black' }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'black' }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="w-4/5 mx-auto mb-12">
      <Slider {...sliderSettings}>
        {photos
          ? photos.map((item, index) => (
              <img
                src={item}
                alt={`photo${index}`}
                key={index}
                className="w-full h-[400px] object-cover rounded-xl "
              />
            ))
          : null}
      </Slider>
    </div>
  );
}

export default SlideShow;
