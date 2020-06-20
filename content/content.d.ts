import colors from './colors.json';
import fonts from './fonts.json';
import analytics from './analytics.json';
import settings from './settings.json';

export interface Content {
  colors: typeof colors;
  fonts: typeof fonts;
  analytics: typeof analytics;
  settings: typeof settings;
}
