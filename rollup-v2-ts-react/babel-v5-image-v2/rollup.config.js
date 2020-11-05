import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import image from '@rollup/plugin-image';
import css from "rollup-plugin-css-only";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.tsx",
    output: {
      file: "dist/bundle.js",
      format: "iife",
    },
    plugins: [
      // Bundle src
      babel({
        extensions: [".ts", ".tsx"],
        babelHelpers: "bundled",
        include: ["src/**/*"],
      }),
      css({ output: "dist/bundle.css" }),
      image(),
      // Bundle vendors
      resolve(),
      commonJS({
        include: "node_modules/**",
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],
  },
  {
    input: "./src/index.tsx",
    output: [{ file: "dist/bundle.d.ts", format: "es" }],
    plugins: [css({ output: "dist/bundle.css" }), dts()],
  },
];
