import styled from "styled-components";
import Slider from "react-slick";

export const SSlider = styled(Slider)`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const SCarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5.2rem;
  margin-bottom: 22.8rem;

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .slick-slide {
    width: 100%;
  }

  .slick-prev,
  .slick-next {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;

    position: absolute;
    transition: background-color 0.3s ease;

    &:after {
      display: none;
    }

    @media (min-width: 768px) {
      width: 5rem;
      height: 5rem;
    }

    @media (min-width: 1440px) {
      display: block;
    }
  }
`;
