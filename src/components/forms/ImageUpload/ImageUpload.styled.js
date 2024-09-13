import styled from "styled-components";

export const SImageUploadWrapper = styled.div`
  border: 1px dashed var(--clr-secondary);

  border-radius: 8px;
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: var(--clr-bg-primary);
`;

export const SImageWrapper = styled.figure`
  width: 9.2rem;
  height: 8.2rem;
  border-radius: 0.4rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SImageInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;


