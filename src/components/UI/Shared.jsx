import styled, { css } from "styled-components";

export const Heading = styled.h2`
  font-size: var(--fs-lg);
  font-weight: 500;
  color: var(--clr-text-primary);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: auto;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  ${({ $colorType }) => {
    const btnColor = `var(--clr-btn-${$colorType || "primary"})`;
    const btnColorHover = `var(--clr-btn-${$colorType || "primary"}-hover)`;

    return css`
      ${({ $variant }) =>
        $variant === "outline"
          ? css`
              border: 1px solid ${btnColor};
              color: ${btnColor};
              background-color: var(--clr-white);

              &:hover,
              &:active {
                color: var(--clr-white);
                background-color: ${btnColor};
              }
            `
          : css`
              border: 1px solid ${btnColor};
              color: var(--clr-white);
              background-color: ${btnColor};

              &:hover,
              &:active {
                background-color: ${btnColorHover};
              }
            `}
    `;
  }}
  ${({ $small }) =>
    $small
      ? css`
          padding: 0.8rem 1.4rem;
          font-size: 1.4rem;
          border-radius: 0.8rem;
          width: fit-content;
        `
      : css`
          padding: 1.4rem 1.6rem;
          font-size: 1.6rem;
          border-radius: 1rem;
        `}
`;
