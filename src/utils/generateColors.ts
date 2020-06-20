import { lightenDarkenColor } from '~/utils/lightenDarkenColor';
import { Content } from 'content/content';

export const generateColors = (colors: Content['colors']) => ({
  ...colors,
  primaryDark: lightenDarkenColor(colors.primary, 20),
  primaryLight: lightenDarkenColor(colors.primary, -20),
  secondaryDark: lightenDarkenColor(colors.secondary, 20),
  secondaryLight: lightenDarkenColor(colors.secondary, -20),
});

export type Colors = ReturnType<typeof generateColors>;

export type Color = keyof Colors;
