import { Button, MenuList } from "@chakra-ui/react";
import styled from "styled-components";

export const SMenuButton = styled(Button)`
  && {
    height: 3.5rem;
    border-radius: 0.6rem;
    padding: 0.8rem 1.4rem;
    gap: 0.4rem;
    color: var(--clr-text-primary);
    background-color: var(--clr-bg-primary);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    background-color: ${({ $isOpen }) =>
      $isOpen ? "#f3f3f3" : "var(--clr-bg-primary)"} !important;
  }
`;

export const SMenuList = styled(MenuList)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  && {
    padding: 2.4rem;
    border-radius: 1rem;
    border: var(--border);
    background: var(--clr-bg-primary);
    box-shadow: 5px 5px 12px 0px rgba(2, 21, 38, 0.08);
  }
  button {
    align-self: flex-end;
  }
`;
