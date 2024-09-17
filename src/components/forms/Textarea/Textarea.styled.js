import styled from "styled-components";

export const STextarea = styled.textarea`
  height: 13.5rem;
  border: ${({ $error }) =>
    $error ? "1px solid var(--clr-error)" : "1px solid var(--clr-secondary)"};

  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.6rem;
  resize: none;
  outline: none;
`;
