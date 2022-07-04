import SlickSlider from 'react-slick';
import { Container } from './styles';

export function Slider({ children }) {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    infinite: false,
    speed: 500,

    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          arrows: false,
          slidesToShow: 3.4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
}
