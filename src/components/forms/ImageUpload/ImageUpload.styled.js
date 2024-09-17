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

  border: 1px dashed
    ${({ $hasError }) =>
      $hasError ? "var(--clr-error)" : "var(--clr-text-primary)"};
`;

export const SImageWrapper = styled.figure`
  width: 9.2rem;
  height: 8.2rem;
  border-radius: 0.4rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.4rem;
    overflow: hidden;
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

export const SDeleteButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: var(--clr-white);
  border: 1px solid var(--clr-dark);
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  cursor: pointer;
`;
