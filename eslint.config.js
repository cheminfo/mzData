import { defineConfig, globalIgnores } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo';

export default defineConfig(globalIgnores(['coverage', 'dist']), cheminfo, {
  files: ['scripts/**'],
  rules: { 'no-console': 'off' },
});
