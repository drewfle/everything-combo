import React from "react";
import styles from "./styles.css";

export type HiProps = {
  text: string;
};

const Hi = ({ text }: HiProps) => <h1 className={styles.foo}>{text}</h1>;

export default Hi;
