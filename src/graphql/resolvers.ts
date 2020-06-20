import merge from 'lodash.merge';
import { resolver as me } from './queries/me';
import { resolver as register } from './mutations/register';
import { resolver as payment } from './mutations/payment';

export const resolvers = merge(me, register, payment);
