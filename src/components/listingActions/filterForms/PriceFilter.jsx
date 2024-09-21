import { useFilter } from "../../../context/FilterContext";
import RangeFilterForm from "./RangeFilterForm";

const PriceFilter = ({ onClose }) => {
  const {
    selectedMinPrice,
    setSelectedMinPrice,
    selectedMaxPrice,
    setSelectedMaxPrice,
  } = useFilter();

  const pricePresets = [50000, 100000, 150000, 200000, 300000];

  return (
    <RangeFilterForm
      onClose={onClose}
      legendLabel="ფასის მიხედვით"
      minValue={selectedMinPrice}
      maxValue={selectedMaxPrice}
      setMinValue={setSelectedMinPrice}
      setMaxValue={setSelectedMaxPrice}
      presets={pricePresets}
      unit="₾"
      validationMessage={{
        minMaxError: "მინ. ფასი მეტია მაქს. ფასი",
        maxMinError: "მაქს. ფასი ნაკლებია მინ. ფასზე",
      }}
    />
  );
};

export default PriceFilter;
