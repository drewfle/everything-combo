import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-css-only";
import babel from "@rollup/plugin-babel";
import postcss from 'rollup-plugin-postcss'


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
      postcss({
        extract: true,
        modules: true,
        // options: {
        //   config: {
        //     ctx: basePostCssConfig,
        //   },
        // },
        // plugins: []
      }),
      // Bundle vendors
      resolve(),
      commonJS({
        include: "node_modules/**",
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],
  }
];
