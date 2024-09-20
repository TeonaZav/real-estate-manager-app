import Lottie from "lottie-react";
import loadingAnimation from "./../../../assets/loop.json";
import { SCenteredBox } from "./Loader.styled";

const Loader = () => {
  return (
    <SCenteredBox>
      <Lottie animationData={loadingAnimation} />
    </SCenteredBox>
  );
};

export default Loader;
