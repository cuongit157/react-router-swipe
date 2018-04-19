import React from "react";
import { render } from "react-dom";
import DemoSimple from "./demo";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<DemoSimple />, rootElement);
}
