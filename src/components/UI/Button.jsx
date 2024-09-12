import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 1.4rem 1.6rem;
  border-radius: 1rem;
  width: auto;
  font-size: 1.6rem;
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
`;
