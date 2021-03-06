module.exports = api => {
  api.addFeature({
    name: "typescript",
    value: "typescript"
  });

  api.addChoicesBelowFeature({
    type: "list",
    name: "linter",
    message: "linter type",
    when: answers => answers.features
      && answers.features.includes("linter")
      && answers.features.includes("typescript"),
    choices: [
      {
        name: "tslint",
        value: "tslint"
      }
    ]
  });

  api.addPluginsCallback(answers => {
    if (answers.features.includes("typescript")) {
      api.plugins.push("handy-cli-plugin-typescript");
    }
  });
};
