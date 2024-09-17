import styled from "styled-components";

export const SRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8.4rem;
`;

export const SRadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
  cursor: pointer;
  color: var(--clr-dark);
`;

export const SRadio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid var(--clr-dark);
  border-radius: 50%;
  margin-right: 0.7rem;
  position: relative;
  cursor: pointer;
  background-color: white;
  outline: none;

  &:checked::before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    background-color: var(--clr-dark);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
