import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { WORKER_BASE_PATH, workerInstance } from ".";

export const getViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
};

type ViewDetailResponseData = {
  value: ViewSchemaProps;
  metadata: Object;
};

export const getViewDetail = async ({ viewId }: Params) => {
  const response = await workerInstance.get(getViewDetailPath(viewId));

  const responseData = {
    value: JSON.parse(response.data.data.value),
    metadata: response.data.data.metadata,
  };

  return responseData as ViewDetailResponseData;
};
