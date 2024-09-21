import { FilterPanel, ButtonPanel } from "./../../index";
import { SActionPanel } from "./ActionPanel.styled";

const ActionPanel = () => {
  return (
    <SActionPanel>
      <FilterPanel />
      <ButtonPanel />
    </SActionPanel>
  );
};

export default ActionPanel;
