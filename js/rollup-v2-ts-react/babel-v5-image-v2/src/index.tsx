import React from "react";
import ReactDOM from "react-dom";
import cool from "./cool.jpg";
import "./styles.css";

export type HiProps = {
  text: string;
};
const Hi = ({ text }: HiProps) => <h1 className="foo">{text}</h1>;
const Cool = () => <img src={cool} alt="cool" width="400" />;

ReactDOM.render(
  <>
    <Hi text="Hello, world!" />
    <Cool />
  </>,
  document.getElementById("root")
);
