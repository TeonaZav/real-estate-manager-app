import styled from "styled-components";
import { Card } from "@chakra-ui/react";

export const SListCard = styled(Card)`
  && {
    position: relative;

    height: 45.5rem;
    border-radius: 1.4rem;
    padding: 0;
    margin: 0;
    overflow: hidden;
    box-shadow: none;
    border: var(--border);

    img {
      width: 100%;
      border-radius: 0;
      object-fit: cover;
    }

    @media (min-width: 1920px) {
      width: 38.4rem;
    }
  }
`;

export const SPrice = styled.span`
  color: var(--clr-text-primary);
  font-size: 2.8rem;
  font-weight: 700;
  line-height: normal;
`;

export const SAddress = styled.div`
  color: var(--clr-text-primary);
  opacity: 0.7;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.65rem;
  width: 100%;

  svg {
    flex-shrink: 0;
  }
  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }
`;

export const SInfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-top: 2rem;
`;

export const SInfoItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: hsla(var(--clr-dark-op), 0.7);

  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

export const STag = styled.span`
  position: absolute;
  display: inline-block;
  width: 9rem;
  height: 2.6rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: hsla(var(--clr-dark-op), 0.5);
  color: var(--clr-white);
  display: inline-flex;
  place-items: center;
  justify-content: center;
  letter-spacing: 0.64px;
  top: 2.3rem;
  left: 2.3rem;
`;
