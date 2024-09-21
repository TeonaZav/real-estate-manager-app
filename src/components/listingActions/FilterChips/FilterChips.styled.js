import styled from "styled-components";
import { Tag, TagLabel, TagCloseButton, Box } from "@chakra-ui/react";

export const STag = styled(Tag)`
  && {
    padding: 0.6rem 1rem;
    border-radius: 4.3rem;
    border: var(--border);
    background: var(--clr-bg-primary);
    box-shadow: none;
  }
`;

export const STagLabel = styled(TagLabel)`
  && {
    color: rgba(2, 21, 38, 0.8);
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }
`;

export const STagCloseButton = styled(TagCloseButton)`
  && {
    color: var(--clr-dark);
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

export const SChips = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;

export const SClearFilters = styled.button`
  color: var(--clr-dark);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  margin-left: 0.8rem;
`;
