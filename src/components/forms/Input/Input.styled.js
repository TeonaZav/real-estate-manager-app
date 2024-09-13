import styled, { css } from "styled-components";

export const SInput = styled.input`
  border: 1px solid #808a93;
  color: var(--bold-color);
  background-color: var(--clr-bg-primary);
  border-radius: 0.6rem;
  padding: 1.15rem 1rem;
  height: 4.2rem;
  color: var(--clr-text-primary);
  outline: none;
  font-size: 1.6rem;
  ${(props) =>
    props.$error &&
    css`
      border: 1px solid var(--clr-error);
    `}
  ${(props) =>
    props.$success &&
    css`
      border: 1px solid var(--clr-success);
    `}
`;
