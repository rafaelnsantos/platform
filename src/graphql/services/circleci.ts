import { CircleCI } from 'circleci-api';

export const circleci = new CircleCI({
  token: process.env.CIRCLECI_TOKEN as string,
});
