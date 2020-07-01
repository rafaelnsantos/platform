import analytics from './analytics.json';
import settings from './settings.json';
import theme from './theme.json';

export interface Content {
  theme: typeof theme;
  analytics: typeof analytics;
  settings: typeof settings;
}
