import styled from "styled-components";

export const SLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SMain = styled.main`
  flex: 1;
  background-color: var(--color-main-background);
  margin-top: 10rem;
  z-index: 10;
`;
