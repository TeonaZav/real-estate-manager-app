import styled from "styled-components";

export const SAgentInfoWrapper = styled.div`
  height: 17.4rem;
  align-self: stretch;
  border: var(--border);
  width: 50.3rem;
  padding: 2.4rem 2rem;
  border-radius: 0.8rem;
`;

export const SAvatar = styled.figure`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SAgentName = styled.p`
  color: var(--clr-dark);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

export const SContact = styled.span`
  color: #676e76;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  gap: 0.5rem;
`;

export const SContactCt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
