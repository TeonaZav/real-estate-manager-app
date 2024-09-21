import styled from "styled-components";
import { ButtonGroup, Button } from "../../UI/Shared";

export const SButtonPanelWrapper = styled(ButtonGroup)`
  flex-wrap: wrap;
  ${Button} {
    white-space: nowrap;
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    ${Button} {
      width: fit-content;
    }
  }
`;
