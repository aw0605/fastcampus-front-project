import { Spacing } from "@/src/components/Common/Spacing";
import { Heading } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { ViewSchemaFormSliceSpacingFields } from "./SpacingFields";
import { ViewSchemaFormSliceTextFields } from "./TextFields";
import { ViewSchemaFormSliceImageFields } from "./ImageFields";
import { ViewSchemaFormSliceImageSliderFields } from "./ImageSliderFields";
import { ViewSchemaFormSliceAccordionFields } from "./AccordionFields";

export const ViewSchemaFormSliceFields = () => {
  const { fields } = useViewSchemaFormSliceFieldArray();
  return (
    <>
      <Heading
        fontSize="lg"
        style={{ fontWeight: vars.typography.fontWeight[600] }}
      >
        Slice
      </Heading>
      <Spacing />
      {fields.map((field, index) => {
        switch (field.sliceName) {
          case "SpacingSlice": {
            return (
              <ViewSchemaFormSliceSpacingFields
                fieldIndex={index}
                key={index}
              />
            );
          }
          case "TextSlice": {
            return (
              <ViewSchemaFormSliceTextFields fieldIndex={index} key={index} />
            );
          }
          case "ImageSlice": {
            return (
              <ViewSchemaFormSliceImageFields fieldIndex={index} key={index} />
            );
          }
          case "ImageSliderSlice": {
            return <ViewSchemaFormSliceImageSliderFields fieldIndex={index} />;
          }
          case "AccordionSlice": {
            return <ViewSchemaFormSliceAccordionFields fieldIndex={index} />;
          }
          default:
            <></>;
        }
      })}
    </>
  );
};
