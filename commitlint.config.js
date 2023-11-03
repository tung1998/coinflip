module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'warn', // un finish-code
        'uiux', // fix ui/ux
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation only changes
        'chore', // add something without touching production code (Eg: update npm dependencies)
        'style', // Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'ci', // Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
        'test', // Adding missing tests or correcting existing tests
        'revert', // Reverts a previous commit
        'perf', // A code change that improves performance
        'build', // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        'vercel'
      ]

    ]
  }
}
