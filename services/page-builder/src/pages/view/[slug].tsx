import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";
import { useViewSchemaSlices } from "@/src/hooks/useViewSchemaSlices";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useViewSchemaSlices(jsonSchema);

  return <MobileFirstLayout>{slices}</MobileFirstLayout>;
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: ViewSchemaProps;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  const slicedSlug = slug.split("-");
  const viewId = slicedSlug[slicedSlug.length - 1];

  const res = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);

  if (res.status === 200) {
    const jsonData = await res.json();
    return {
      props: {
        jsonSchema: jsonData,
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
