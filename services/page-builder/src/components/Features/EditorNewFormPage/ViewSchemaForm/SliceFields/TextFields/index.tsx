import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { Divider } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ViewSchemaFormSliceTextHighlightFields } from "./TextHighlightField";
import { SliceFieldTitleNavBar } from "../Common/SliceFieldTitleNavBar";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceTextFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useFormContext();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "TextSlice");
  }, [fieldIndex, setValue]);

  return (
    <FormFieldSection
      title={
        <SliceFieldTitleNavBar
          title={`${fieldIndex}. ImageSlider`}
          fieldIndex={fieldIndex}
        />
      }
    >
      <InputField
        label="text"
        {...register(`slices.${fieldIndex}.data.text`)}
      />
      <ViewSchemaFormSliceTextHighlightFields
        label="highlight"
        // @ts-ignore
        register={register}
        fieldIndex={fieldIndex}
      />
      <Divider />
      <InputField
        label="textColor"
        type="color"
        defaultValue={vars.colors.$static.light.color.black}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textColor`)}
      />
      <InputField
        label="textSize"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textSize`)}
      />
      <InputField
        label="textWeight"
        type="number"
        defaultValue={500}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textWeight`)}
      />
      <SelectField
        label="textAlign"
        defaultValue="center"
        {...register(`slices.${fieldIndex}.data.sliceStyle.textAlign`)}
      >
        <option value="left">left</option>
        <option value="center">center</option>
        <option value="right">right</option>
      </SelectField>
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <InputField
        label="highlightTextColor"
        type="color"
        defaultValue={vars.colors.$static.light.green[500]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.highlightTextColor`)}
      />
      <InputField
        label="highlightTextWeight"
        type="number"
        defaultValue={800}
        {...register(
          `slices.${fieldIndex}.data.sliceStyle.highlightTextWeight`,
        )}
      />
    </FormFieldSection>
  );
};
