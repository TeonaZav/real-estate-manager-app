import { Box, Flex } from "@chakra-ui/react";
import {
  SAgentInfoWrapper,
  SAvatar,
  SAgentName,
  SContact,
  SContactCt,
} from "./AgentDetails.styled";

import { IconEmail, IconPhone } from "../../assets";

const AgentDetails = ({ agent }) => {
  return (
    <SAgentInfoWrapper>
      <Flex alignItems="center" gap={"1.4rem"} mb="1.6rem">
        <SAvatar>
          <img src={agent.avatar} alt={agent.name} />
        </SAvatar>
        <Box>
          <SAgentName>
            {agent.name} {agent.surname}
          </SAgentName>
          <SContact>აგენტი</SContact>
        </Box>
      </Flex>
      <SContactCt>
        <SContact>
          <IconEmail />
          {agent.email}
        </SContact>
        <SContact>
          <IconPhone />
          {agent.phone}
        </SContact>
      </SContactCt>
    </SAgentInfoWrapper>
  );
};

export default AgentDetails;
