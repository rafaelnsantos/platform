import { DefaultTheme } from 'styled-components';

import { Colors } from '~/utils/generateColors';
import { Content } from 'content/content';

declare module 'styled-components' {
  type Theme = {
    colors: Colors;
    fonts: Content['fonts'];
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
