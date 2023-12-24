import "./GithubWorkflowUi.css";

const briefOnSteps = [
  {
    command: "name: learn-github-actions",
    description: `Optional - The name of the workflow as it will appear in the "Actions" tab of the GitHub repository. If this field is omitted, the name of the workflow file will be used instead.`,
  },
  {
    command: "run-name: ${{ github.actor }} is learning GitHub Actions",
    description: `Optional - The name for workflow runs generated from the workflow, which will appear in the list of workflow runs on your repository's "Actions" tab. This example uses an expression with the github context to display the username of the actor that triggered the workflow run. For more information, see "Workflow syntax for GitHub Actions."`,
  },
  {
    command: "on: [push]",
    description: `Specifies the trigger for this workflow. This example uses the push event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request. This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "Workflow syntax for GitHub Actions."`,
  },
  {
    command: "jobs:",
    description: `Groups together all the jobs that run in the learn-github-actions workflow.`,
  },
  {
    command: "check-bats-version:",
    description: `Defines a job named check-bats-version. The child keys will define properties of the job.`,
  },
];

const GithubWorkflowUi = () => {
  return (
    <div className="container lh-144">
      {briefOnSteps.map((step, index) => (
        <div className="row" key={step.command}>
          <span
            className={`content command ${
              index === 0
                ? "command-with-border-top"
                : index === briefOnSteps.length - 1
                ? "command-with-border-bottom"
                : ""
            }`}
          >
            {step.command}
          </span>
          <span className="content">{step.description}</span>
        </div>
      ))}
    </div>
  );
};
export default GithubWorkflowUi;
