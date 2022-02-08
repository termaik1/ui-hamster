import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import {
    terser
} from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer"

import pkg from "./package.json";

export default {
    input: pkg.main,
    output: [{
        file: pkg.output,
        format: "esm",
        name: "bundle",
        exports: "named",
    }],
    external: ["styled-components"],
    globals: {
        "styled-components": "styled"
    },
    plugins: [
        external(),
        url(),
        svgr(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            clean: true,
            exclude: ["src/components/**/*.stories.tsx"]
        }),
        commonjs({
            include: "node_modules/**",
            namedExports: {
                "node_modules/react/index.js": ["useState"],
                "react/jsx-runtime": ["jsx", "jsxs"],
                "node_modules/react-is/index.js": ['ForwardRef', "Memo", "isFragment"]
            }
        }),
        terser({
            ecma: 2015,
            mangle: {
                toplevel: true
            },
            compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: true,
                drop_debugger: true
            },
            output: {
                quote_style: 1
            }
        }),
        analyze()
    ]
};