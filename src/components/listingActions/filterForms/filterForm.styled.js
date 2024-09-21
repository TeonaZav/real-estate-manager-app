import styled from "styled-components";
import { motion } from "framer-motion";
import { Input, FormControl, FormLabel, Checkbox } from "@chakra-ui/react";

import { Button } from "../../UI/Shared";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-left: auto;
    margin-top: 3.2rem;
  }
`;

export const SFormLabel = styled(FormLabel)`
  color: var(--clr-dark);
  font-size: var(--fs-body);
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2.4rem;
`;

export const SLabel = styled(FormLabel)`
  && {
    color: var(--clr-dark);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 1.6rem;
  }
`;

export const SFormControl = styled(FormControl)`
  position: relative;
  height: 4.2rem;
  margin-bottom: 2.4rem;
  padding-right: 2rem;

  && {
    @media (min-width: 768px) {
      width: 13.5rem;
    }
  }
`;

export const SFilterWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const SButtonWrapper = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  @media (min-width: 768px) {
    width: 15.5rem;
  }
`;

export const SUnitButton = styled.button`
  color: var(--clr-blue-grey);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const SInput = styled(Input)`
  margin-bottom: 2.4rem;
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    height: 4.2rem;
    width: 10rem;
    padding: 1rem;
    padding-right: 2rem;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;

    border: ${({ $hasError }) => {
      if ($hasError) return "1px solid var(--clr-error)";
      return "1px solid #808a9366";
    }};

    &:active,
    &:focus {
      outline: none;
      box-shadow: none;
      border: 1px solid #808a93;
    }

    &:not(:placeholder-shown) {
      border: ${({ $hasError }) => {
        if ($hasError) return "1px solid var(--clr-error)";
        return "1px solid #808a93;";
      }};
    }

    &::placeholder {
      color: rgba(2, 21, 38, 0.4);
      font-size: inherit;
    }
    @media (min-width: 768px) {
      width: 13.5rem;
    }
  }
`;

export const SBedroomInput = styled(SInput)`
  max-width: 4.1rem;
  padding-right: 1rem !important;
  flex: 1 0 0;
  text-align: center;
`;

export const SCheckbox = styled(Checkbox)`
  && {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    svg {
      width: 1.3rem;
    }
    .chakra-checkbox__control {
      width: 2rem;
      height: 2rem;
      border: var(--border);
      border-radius: 0.2rem;
      &&:active {
        outline: none;
        box-shadow: none;
      }
    }
    .chakra-checkbox__label {
      color: var(--clr-dark);
      font-size: var(--fs-xs);
      font-weight: 400;
    }
    .chakra-checkbox__control[data-checked] {
      background-color: var(--clr-green);
      outline: none;
      box-shadow: none;
      border: 1px solid transparent;
    }
  }
`;

export const SMessage = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: var(--fs-xs);
  color: var(--clr-error);
  margin-top: 0.8rem;
`;

export const SInputUnit = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  width: 1rem;
  top: 0;
  right: 1rem;
  background-color: var(--clr-bg-primary);
  height: 100%;
  color: #2d3648;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
