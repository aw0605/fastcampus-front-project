import { useState } from "react";
import { JsonEditor } from "@/src/components/Editor/Json";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { Button } from "@fastcampus/react-components-button";
import ShortUniqueId from "short-unique-id";
import { previewStorage } from "@/src/utils/storage";
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { useToast } from "@fastcampus/react-components-toast";
import { DesktopFirstSideNav } from "@/src/components/layout/DesktopFirstLayout/SideNav";
import { JsonPresetList } from "@/src/components/EditorNewPage";
import { putViewDetail } from "@/src/apis/worker/putViewDetail";

const EditorNewPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());
  // const viewId = randomUUID();

  const { toast } = useToast();

  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const { validateViewSchema, handleEditorValidation } =
    useViewSchemaValidation();

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  const handlePreview = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        previewStorage.set(viewId, schema);

        window.open(`/preview/${viewId}`, "_blank");
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message: message,
          },
        });
      },
    });
  };

  const handlePublish = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: async () => {
        try {
          await putViewDetail({
            viewId,
            data: {
              value: JSON.stringify(schema),
              metadata: {
                createAt: new Date().toISOString(),
              },
            },
          });
        } catch (error) {
          toast({
            payload: {
              // @ts-ignore
              message: `[Fetch Error] ${error.message}`,
            },
          });
        }
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message: message,
          },
        });
      },
    });
  };

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button
          variant="outline"
          size="md"
          color="gray"
          onClick={handlePreview}
        >
          미리보기
        </Button>
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>
          <JsonPresetList
            schema={schema}
            setSchema={setSchema}
            validateViewSchema={validateViewSchema}
          />
        </DesktopFirstSideNav>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
          onValidate={handleEditorValidation}
        />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};
export default EditorNewPage;
