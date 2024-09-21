import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Stack, FormControl, SimpleGrid } from "@chakra-ui/react";
import { useAddressData } from "../../../hooks/useAddressData";
import { useFilter } from "../../../context/FilterContext";
import { Button } from "../../UI/Shared";
import { SForm, SCheckbox, SFormLabel } from "./filterForm.styled";

const RegionFilter = ({ onClose }) => {
  const { selectedRegions, setSelectedRegions } = useFilter();
  const { regions } = useAddressData();
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      regions: selectedRegions || [],
    },
  });

  const watchedRegions = watch("regions");

  useEffect(() => {
    const currentRegions = searchParams.get("region")?.split(",") || [];
    setValue("regions", currentRegions);
    setSelectedRegions(currentRegions);
  }, [searchParams, setValue, setSelectedRegions]);

  const handleRegionChange = (regionValue) => {
    const currentValues = getValues("regions") || [];
    let newSelectedRegions;

    if (currentValues.includes(regionValue)) {
      newSelectedRegions = currentValues.filter((r) => r !== regionValue);
    } else {
      newSelectedRegions = [...currentValues, regionValue];
    }

    setValue("regions", newSelectedRegions);
  };

  const onSubmit = (data) => {
    const selected = data.regions || [];
    const formattedSelectedRegions = selected.map((region) => String(region));

    setSelectedRegions(formattedSelectedRegions);

    const updatedParams = new URLSearchParams(searchParams);

    if (formattedSelectedRegions.length > 0) {
      updatedParams.set("region", formattedSelectedRegions.join(","));
    } else {
      updatedParams.delete("region");
    }

    setSearchParams(updatedParams);
    onClose();
  };

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5} direction="row">
        <FormControl as="fieldset">
          <SFormLabel as="legend">რეგიონების მიხედვით</SFormLabel>
          <SimpleGrid columns={3} rowGap={"1.6rem"} columnGap={"5rem"}>
            {regions.map((region) => (
              <SCheckbox
                key={region.value}
                id={region.value}
                value={region.value}
                {...register("regions")}
                isChecked={watchedRegions.includes(String(region.value))}
                onChange={() => handleRegionChange(String(region.value))}
              >
                {region.label}
              </SCheckbox>
            ))}
          </SimpleGrid>
        </FormControl>
      </Stack>

      <Button type="submit" $small>
        არჩევა
      </Button>
    </SForm>
  );
};

export default RegionFilter;
