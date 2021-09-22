import glamorous from "glamorous";
import { Button } from "semantic-ui-react";

export const Label = glamorous.label({
  textAlign: "left",
});

export const P = glamorous.p({
  textAlign: "justify",
});

export const LeftAlignedDiv = glamorous.div({
  textAlign: "left",
});

export const FlexDisplayedDiv = glamorous.div({
  display: "flex",
});

export const StyledButton = glamorous(Button)({
  backgroundColor: "#4f7f71 !important",
  color: "white !important",
});
