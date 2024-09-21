import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Flex } from "@chakra-ui/react";
import { useFilter } from "../../../context/FilterContext";
import { Button } from "../../UI/Shared";
import {
  SForm,
  SFormControl,
  SBedroomInput,
  SFormLabel,
} from "./filterForm.styled";

const BedroomFilter = ({ onClose }) => {
  const { selectedBedrooms, setSelectedBedrooms } = useFilter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bedrooms: selectedBedrooms || "",
    },
  });

  const watchedBedrooms = watch("bedrooms");

  useEffect(() => {
    setValue("bedrooms", selectedBedrooms || "");
  }, [selectedBedrooms, setValue]);

  const onSubmit = (data) => {
    const { bedrooms } = data;
    setSelectedBedrooms(bedrooms);
    onClose();
  };

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <SFormLabel as="legend">საძინებლების რაოდენობა</SFormLabel>

      <Flex gap={"1.6rem"}>
        <SFormControl>
          <SBedroomInput
            type="number"
            {...register("bedrooms")}
            placeholder=""
            $hasError={errors?.bedrooms}
          />
        </SFormControl>
      </Flex>

      <Button type="submit" $small>
        არჩევა
      </Button>
    </SForm>
  );
};

export default BedroomFilter;
