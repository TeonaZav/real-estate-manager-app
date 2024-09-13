import styled from "styled-components";
import { motion } from "framer-motion";

export const SFormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SMessage = styled(motion.span)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: var(--fs-xs);
  color: var(--clr-text-primary);
  color: ${({ $hasError, $isSuccess }) =>
    $hasError
      ? "var(--clr-error)"
      : $isSuccess
      ? "var(--clr-success)"
      : "var(--clr-text-primary)"};
`;

export const SLabel = styled.label`
  font-size: var(--fs-xs);
  font-weight: 500;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  color: ${({ $open }) => ($open ? "var(--clr-white)" : "var(--clr-disabled)")};
  transition: all 0.3s ease-in;
`;
