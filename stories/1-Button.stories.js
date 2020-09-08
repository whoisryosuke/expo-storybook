import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Button } from "react-native";
import styled from "styled-components/native";

const StyledButton = styled(Button)`
  background-color: red;
  color: red;
  background: red;
`;

export default {
  title: "Button",
};

export const text = () => (
  <Button title="Hello Button" onPress={action("clicked")} />
);
export const styledComponent = () => (
  <StyledButton title="Hello Button" onPress={action("clicked")} />
);

// On-Device Register
storiesOf("Button", module).add("Text", text);
