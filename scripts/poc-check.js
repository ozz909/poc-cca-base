const { writeFileSync } = require("fs");

const result = [
  "CANARY=FORK_PR2_CANARY_SEEN",
  `HAS_GITHUB_TOKEN=${Boolean(process.env.GITHUB_TOKEN)}`,
  `HAS_GH_TOKEN=${Boolean(process.env.GH_TOKEN)}`,
  `HAS_OIDC_URL=${Boolean(process.env.ACTIONS_ID_TOKEN_REQUEST_URL)}`,
  `HAS_OIDC_TOKEN=${Boolean(process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN)}`,
].join("\n");

writeFileSync("poc-context.txt", result + "\n");
console.log("Safe PoC completed. Wrote boolean-only context to poc-context.txt.");
