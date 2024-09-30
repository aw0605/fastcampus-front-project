import { Box, BoxProps } from "@fastcampus/react-components-layout";

type Props = BoxProps;

export const DesktopFirstLayout = (props: Props) => {
  const { children, className, ...rest } = props;

  const currentClassName = ["min-h-full w-full relative", className].join(" ");

  return (
    <Box className={currentClassName} {...rest}>
      {children}
    </Box>
  );
};
