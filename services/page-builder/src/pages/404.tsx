import { Flex, Heading, Text } from "@fastcampus/react-components-layout";

const Error404Page = () => (
  <div className="w-screen h-screen flx justify-center">
    <Flex className="pt-[200px]" direction="column" align="center" gap={8}>
      <Heading fontSize="2xl">Not Found</Heading>
      <Text fontSize="lg">에러가 발생했습니다. 잠시 후 다시 시도하세요!</Text>
    </Flex>
  </div>
);
export default Error404Page;
