module.exports = {
  extends: "@it-incubator/eslint-config",
  rules: { "no-console": ["warn", { allow: ["warn", "error"] }],
  "react/jsx-curly-brace-presence": [
    'error',
    { children: 'never', propElementValues: 'never', props: 'never' },
  ], },
};
