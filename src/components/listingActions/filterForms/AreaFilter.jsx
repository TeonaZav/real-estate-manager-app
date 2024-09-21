import { useFilter } from "../../../context/FilterContext";
import RangeFilterForm from "./RangeFilterForm";

const AreaFilter = ({ onClose }) => {
  const {
    selectedMinArea,
    setSelectedMinArea,
    selectedMaxArea,
    setSelectedMaxArea,
  } = useFilter();

  const areaPresets = [50, 100, 150, 200, 300];

  return (
    <RangeFilterForm
      onClose={onClose}
      legendLabel="ფართობის მიხედვით"
      minValue={selectedMinArea}
      maxValue={selectedMaxArea}
      setMinValue={setSelectedMinArea}
      setMaxValue={setSelectedMaxArea}
      presets={areaPresets}
      unit="მ²"
      validationMessage={{
        minMaxError: "მინ. ფართობი მეტია მაქს. ფართობზე",
        maxMinError: "მაქს. ფართობი ნაკლებია მინ. ფართობზე",
      }}
    />
  );
};

export default AreaFilter;
