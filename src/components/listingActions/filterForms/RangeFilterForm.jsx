import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Flex } from "@chakra-ui/react";

import {
  SFilterWrapper,
  SButtonWrapper,
  SFormControl,
  SUnitButton,
  SLabel,
  SInput,
  SForm,
  SFormLabel,
  SMessage,
  SInputUnit,
} from "./filterForm.styled";
import { Button } from "../../UI/Shared";
import { fadeInAnimationContfig } from "../../../utils/animationConfig";

const RangeFilterForm = ({
  legendLabel,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  presets,
  unit,
  validationMessage,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      minInput: minValue || "",
      maxInput: maxValue || "",
    },
  });

  const watchedMinInput = watch("minInput");
  const watchedMaxInput = watch("maxInput");

  useEffect(() => {
    setValue("minInput", minValue || "");
    setValue("maxInput", maxValue || "");
  }, [minValue, maxValue, setValue]);

  const onSubmit = (data) => {
    const { minInput, maxInput } = data;

    clearErrors();

    if (minInput && maxInput && Number(minInput) > Number(maxInput)) {
      setError("minInput", {
        type: "manual",
        message: validationMessage.minMaxError,
      });
      setError("maxInput", {
        type: "manual",
        message: validationMessage.maxMinError,
      });
      return;
    }

    setMinValue(minInput);
    setMaxValue(maxInput);

    onClose();

    clearErrors();
  };

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <SFormLabel as="legend">{legendLabel}</SFormLabel>

      <Flex gap={"1.6rem"}>
        <SFormControl>
          <SInputUnit>{unit}</SInputUnit>
          <SInput
            type="number"
            {...register("minInput")}
            placeholder="დან"
            $hasError={errors?.minInput || errors?.maxInput}
          />
        </SFormControl>
        <SFormControl>
          <SInputUnit>{unit}</SInputUnit>
          <SInput
            type="number"
            {...register("maxInput")}
            placeholder="მდე"
            $hasError={errors?.minInput || errors?.maxInput}
          />
        </SFormControl>
      </Flex>

      <SFilterWrapper>
        <Box>
          <SLabel>მინ. {unit}</SLabel>
          <SButtonWrapper>
            {presets.map((preset) => (
              <SUnitButton
                key={preset}
                type="button"
                onClick={() => setValue("minInput", preset)}
              >
                {preset.toLocaleString()} {unit}
              </SUnitButton>
            ))}
          </SButtonWrapper>
        </Box>

        <Box>
          <SLabel>მაქს. {unit}</SLabel>
          <SButtonWrapper>
            {presets.map((preset) => (
              <SUnitButton
                key={preset}
                type="button"
                onClick={() => setValue("maxInput", preset)}
              >
                {preset.toLocaleString()} {unit}
              </SUnitButton>
            ))}
          </SButtonWrapper>
        </Box>
      </SFilterWrapper>

      {errors.maxInput && (
        <SMessage {...fadeInAnimationContfig}>
          {errors?.maxInput?.message || errors?.minInput?.message}
        </SMessage>
      )}

      <Button type="submit" $small>
        არჩევა
      </Button>
    </SForm>
  );
};

export default RangeFilterForm;
