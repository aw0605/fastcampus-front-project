import { Flex, FlexProps } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = FlexProps;

export const DesktopFirstNav = (props: Props) => {
  const {
    children,
    padding = 2,
    boxShadow = "base",
    justify = "right",
    className,
    ...rest
  } = props;

  const currentClassName = ["w-full h-[56px] fixed top-0 z-50", className].join(
    " ",
  );

  return (
    <Flex
      className={currentClassName}
      padding={padding}
      justify={justify}
      boxShadow={boxShadow}
      style={{
        background: vars.colors.$static.light.color.white,
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
