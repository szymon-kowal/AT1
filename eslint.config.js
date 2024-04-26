import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("airbnb-base"),
  {
    ignores: [
      "node_modules/",
      "coverage",
      "mochawesome-report",
      "eslint.config.js",
    ],
  },
  {
    rules: {
      "class-methods-use-this": "off",
      "arrow-parens": "off",
      "prefer-arrow-callback": "off",
      "func-names": "off",
      "object-curly-newline": "off",
      // Added by myself because I think those errors were showing in bash after running lint, where everything else
      // was running fine
      "import/extensions": "off",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
    },
  },
];
