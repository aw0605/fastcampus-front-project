import { Spacing } from "@/src/components/Common/Spacing";
import { Heading } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { ViewSchemaFormSliceSpacingFeilds } from "./SpacingFields";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { ViewSchemaFormSliceTextFeilds } from "./TextFields";

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
            return <ViewSchemaFormSliceSpacingFeilds fieldIndex={index} />;
          }
          case "TextSlice": {
            return <ViewSchemaFormSliceTextFeilds fieldIndex={index} />;
          }
          default:
            <></>;
        }
      })}
    </>
  );
};
