import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@fastcampus/react-components-button";
import { vars } from "@fastcampus/themes";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceSpacingFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "SpacingSlice");
  }, [fieldIndex, setValue]);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    remove(fieldIndex);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Spacing{" "}
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={handleRemove}
          >
            삭제
          </Button>
        </>
      }
    >
      <InputField
        label="height"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.height`)}
      />
      <InputField
        label="height"
        type="color"
        defaultValue={vars.colors.$static.light.gray[300]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
    </FormFieldSection>
  );
};
