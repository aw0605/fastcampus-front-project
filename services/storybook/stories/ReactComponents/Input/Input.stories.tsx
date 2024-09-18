import React from "react";
import "@fastcampus/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@fastcampus/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>+82</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="dd" />,
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
