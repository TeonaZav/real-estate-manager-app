import styled from "styled-components";
import { Heading, ButtonGroup } from "../../UI/Shared";

export const SFormWrapper = styled.div`
  padding-top: 6.2rem;
  padding-bottom: 8.7rem;

  ${Heading} {
    line-height: 1.2;
    text-align: center;
    margin-bottom: 6.2rem;
  }
`;
export const SForm = styled.form`
  width: 95%;
  margin: 0 auto;

  ${ButtonGroup} {
    margin-top: 8.9rem;
  }
  @media (min-width: 1024px) {
    width: 79rem;
  }
`;

export const SFormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const SFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $radio }) => ($radio ? "0.8rem" : "2.2rem")};
`;

export const SGroupLabel = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  color: #1a1a1f;
  display: inline-block;
  font-weight: 500;
  font-size: 1.6rem;
`;
