type UpdateSchedule = 'live' | 'daily' | 'weekly' | 'monthly';

type AutoMergeRule =
  | 'never'
  | 'security:patch'
  | 'semver:patch'
  | 'semver:minor'
  | 'in_range'
  | 'all';

type AccountType = 'org' | 'user';

type PackageManager =
  | 'bundler'
  | 'composer'
  | 'docker'
  | 'maven'
  | 'npm_and_yarn'
  | 'elm'
  | 'submodules'
  | 'hex'
  | 'cargo'
  | 'gradle'
  | 'nuget'
  | 'dep'
  | 'go_modules'
  | 'pip'
  | 'terraform'
  | 'github_actions';

interface Config {
  'repo-id': string;
  'account-id': string;
  'account-type': AccountType;
  directory: string;
  'update-schedule': UpdateSchedule;
  'package-manager': PackageManager;
  'target-branch'?: string;
  'lockfile-only'?: boolean;
  'security-updates-only'?: boolean;
  'automerge-rule-development-deps'?: AutoMergeRule;
  'automerge-rule-runtime-deps'?: AutoMergeRule;
  'automerge-whitelist'?: string[];
}

function createConfig(config: Config) {
  const url = 'https://api.dependabot.com/update_configs';

  // eslint-disable-next-line no-undef
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Personal ${process.env.GH_TOKEN}`,
    },
    body: JSON.stringify(config),
  });
}

export const dependabot = {
  createConfig,
};
