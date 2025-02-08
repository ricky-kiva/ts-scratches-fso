import pluginJs from "@eslint/js";
import tseslint, { plugin } from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.ts"],
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked
  ],
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error'
  }
});
