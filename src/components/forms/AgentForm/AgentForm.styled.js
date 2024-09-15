import styled from "styled-components";
import { Heading, ButtonGroup } from "../../UI/Shared";

export const SFormWrapper = styled.div`
  padding-block: 8.7rem;
  ${Heading} {
    line-height: 1.2;
    text-align: center;
    margin-bottom: 6.2rem;
  }
`;
export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;

  &:not(:last-child) {
    gap: 2.8rem;
  }
  ${ButtonGroup} {
    margin-top: 9.4rem;
  }
  @media (min-width: 1024px) {
    width: 79.9rem;
  }
`;
