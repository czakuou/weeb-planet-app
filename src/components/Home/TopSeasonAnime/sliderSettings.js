const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 11,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3350,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 2650,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
        {
            breakpoint: 1850,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 7,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
            dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  export default settings