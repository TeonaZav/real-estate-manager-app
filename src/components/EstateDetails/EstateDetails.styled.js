import styled from "styled-components";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

export const SInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.6rem;
  margin-bottom: 4rem;
`;

export const SInfoListItem = styled.li`
  color: #808a93;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;
`;

export const SDescription = styled.p`
  color: #808a93;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin-bottom: 5rem;
`;

export const SDeleteButton = styled.button`
  border-radius: 0.8rem;
  border: 1px solid #676e76;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #676e76;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
  margin-top: 2rem;
`;

export const SBanner = styled.figure`
  width: 83.9rem;
  height: 67rem;
  width: 53%;
  border-radius: 1.4rem 1.4rem 0px 0px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
  }
  figcaption {
    color: #808a93;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    margin-bottom: 5rem;
    margin-left: auto;
    text-align: right;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.4rem;
  }
`;

export const SPrice = styled.p`
  color: var(--clr-dark);
  font-size: 4.8rem;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2.4rem;
`;

export const SWatningQuestion = styled.h5`
  color: #2d3648;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3.5rem;
`;
