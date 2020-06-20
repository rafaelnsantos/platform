import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({ auth: process.env.GH_TOKEN });
