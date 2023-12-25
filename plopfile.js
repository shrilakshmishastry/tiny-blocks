export default function (plop) {
  plop.setGenerator("create component", {
    description: "Create component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Give component name exactly as you want it in tsx",
      },
      {
        type: "input",
        name: "css-file",
        message: "Give css file name",
      },
      {
        type: "input",
        name: "story-file",
        message: "Give story file name exactly as you want it in tsx",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}/{{name}}.tsx",
        templateFile: "./plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{name}}/{{css-file}}.css",
      },
      {
        type: "add",
        path: "src/{{name}}/{{story-file}}.stories.tsx",
        templateFile: "./plop-templates/story.hbs",
      },
    ],
  });
}
