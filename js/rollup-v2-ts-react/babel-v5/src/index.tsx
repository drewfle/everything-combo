import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export type HiProps = {
  text: string;
};
const Hi = ({ text }: HiProps) => <h1 className="foo">{text}</h1>;

ReactDOM.render(<Hi text="Hello, world!" />, document.getElementById("root"));
