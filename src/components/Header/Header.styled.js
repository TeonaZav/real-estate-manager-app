import styled from "styled-components";
import { SContainer } from "../../styles/SharedStyles";

export const SHeader = styled.header`
  width: 100%;
  position: fixed;
  height: 10rem;
  border-bottom: var(--border);

  ${SContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SLogo = styled.figure`
  width: 15rem;
  height: 2.4rem;

  svg {
    width: 100%;
    object-fit: contain;
  }
`;
