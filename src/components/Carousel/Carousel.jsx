import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";
import { SCarouselWrapper, SSlider } from "./Carousel.styled";
import { IconPrev, IconNext } from "../../assets";
import { ListCard } from "./../index";
import { chakraTheme } from "../../utils/theme";

const PortalArrow = ({ Icon, onClick, direction }) => {
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    const portalElement = document.getElementById("slider-arrows-portal");
    setPortalNode(portalElement);
  }, []);

  if (!portalNode) return null;

  const arrowStyles = {
    position: "absolute",
    top: "25rem",
    zIndex: 2,
    left: direction === "prev" ? "-4rem" : "auto",
    right: direction === "next" ? "-4rem" : "auto",
  };

  return ReactDOM.createPortal(
    <button
      className={`slick-${direction}`}
      onClick={onClick}
      style={arrowStyles}
    >
      <Icon />
    </button>,
    portalNode
  );
};

const Carousel = ({ data }) => {
  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1920) return 4;
    if (width >= 1440) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const isEnoughSlides = data.length > slidesToShow;

  if (!isEnoughSlides) {
   
    return (
      <ChakraProvider theme={chakraTheme}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          height="100%"
          gap={"2rem"}
          mt={"3.2rem"}
        >
          {data.map((item) => (
            <GridItem w="100%" p={0} key={item.id}>
              <ListCard key={item.id} {...item} />
            </GridItem>
          ))}
        </Grid>
      </ChakraProvider>
    );
  }

  const settings = {
    dots: false,
    infinite: isEnoughSlides,
    speed: 500,
    slidesToShow,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <PortalArrow Icon={IconNext} direction="next" />,
    prevArrow: <PortalArrow Icon={IconPrev} direction="prev" />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="slider-arrows-portal"
        style={{ position: "relative", zIndex: 100 }}
      ></div>

      <SCarouselWrapper>
        <SSlider {...settings}>
          {data.map((item) => (
            <ListCard key={item.id} {...item} />
          ))}
        </SSlider>
      </SCarouselWrapper>
    </>
  );
};

export default Carousel;
